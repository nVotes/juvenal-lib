import { VRecord } from './VRecord'
import { VRecorder } from '../recorders/VRecorder'
import { arithm, crypto, eio } from '../../vendors/vjsc/vjsc-1.1.1'
import { ChaumPedersenProof } from '../../vendors/electionguard-schema-0.85/@types/election_record'
import { SchnorrProof as CryptoSchnorrProof } from '../crypto/SchnorrProof'
import {
  strDecToByteArray,
  strDecToByteTree,
  isError,
  firstError
} from '../crypto/utils'

class SigmaProofOr extends crypto.SigmaProofOr {
  constructor(challengeSpace: arithm.PRing, proofs: CryptoSchnorrProof[]) {
    super(challengeSpace, proofs)
  }

  instanceToByteTree(instances: arithm.PGroupElement[]): eio.ByteTree {
    // TODO
    return this.sigmaProofs[0].instanceToByteTree(instances[0])
  }
}

/**
 * Verifies a Chaum-Pedersen + CDS Proof of zero or one.
 */
export class VZeroOrOneProofRecord implements VRecord {
  /// Context of this record
  context: string[] = []

  /// The record data
  zeroProof: ChaumPedersenProof
  oneProof: ChaumPedersenProof

  /// A = g^witness (mod p)
  A: arithm.ModPGroupElement

  /// B = K^witness (mod p) or B = g^1 * K^witness (mod p)
  B: arithm.ModPGroupElement

  /// The second base used in for B, usually the public key of an encrypted
  /// message, but could be any number of Gq
  K: arithm.ModPGroupElement

  /// Title of what we are proving, used for text recording purposes
  proofTitle: string

  /// Hash to use as a label in this proof
  label: Uint8Array

  constructor(
    parentContext: string[],
    label: Uint8Array,
    zeroProof: ChaumPedersenProof,
    oneProof: ChaumPedersenProof,
    A: arithm.ModPGroupElement,
    B: arithm.ModPGroupElement,
    K: arithm.ModPGroupElement,
    proofTitle: string
  ) {
    this.context = parentContext.slice()
    this.label = label
    this.zeroProof = zeroProof
    this.oneProof = oneProof
    this.A = A
    this.B = B
    this.K = K
    this.proofTitle = proofTitle
  }

  /// Verify the ZKPs
  verify(recorder: VRecorder): void {
    const group = this.K.pGroup

    // wrapped in a try-catch because deserialization could fail
    try {
      const zeroChallenge = strDecToByteArray(this.zeroProof.challenge)
      const zeroResponse = strDecToByteArray(this.zeroProof.response)
      const oneChallenge = strDecToByteArray(this.oneProof.challenge)
      const oneResponse = strDecToByteArray(this.oneProof.response)

      const ppGroup = new arithm.PPGroup([group, group])
      const pair = ppGroup.prod([group.getg(), this.K])

      const expHomProd = new arithm.ExpHom(group.pRing, pair)
      const schnorrProofVerifiers = [
        new CryptoSchnorrProof(expHomProd),
        new CryptoSchnorrProof(expHomProd)
      ]
      const cdsVerifier = new SigmaProofOr(group.pRing, schnorrProofVerifiers)

      const zeroCommitment1 = strDecToByteTree(
        this.zeroProof.commitment.public_key
      )
      const zeroCommitment2 = strDecToByteTree(
        this.zeroProof.commitment.ciphertext
      )
      const oneCommitment1 = strDecToByteTree(
        this.oneProof.commitment.public_key
      )
      const oneCommitment2 = strDecToByteTree(
        this.oneProof.commitment.ciphertext
      )

      if (
        !isError(zeroCommitment1) &&
        !isError(zeroCommitment2) &&
        !isError(oneCommitment1) &&
        !isError(oneCommitment2)
      ) {
        // 0 or 1
        const instances: arithm.PPGroupElement[] = [
          ppGroup.prod([this.A, this.B]),
          ppGroup.prod([this.A, this.B.mul(group.getg().inv())])
        ]

        const commitments: eio.ByteTree[] = [
          new eio.ByteTree([
            eio.ByteTree.asByteTree(zeroCommitment1),
            eio.ByteTree.asByteTree(zeroCommitment2)
          ]),
          new eio.ByteTree([
            eio.ByteTree.asByteTree(oneCommitment1),
            eio.ByteTree.asByteTree(oneCommitment2)
          ])
        ]

        // verificatum format groups challenges and responses this way
        const responses: eio.ByteTree[] = [
          new eio.ByteTree([
            eio.ByteTree.asByteTree(zeroChallenge),
            eio.ByteTree.asByteTree(oneChallenge)
          ]),
          new eio.ByteTree([
            eio.ByteTree.asByteTree(zeroResponse),
            eio.ByteTree.asByteTree(oneResponse)
          ])
        ]

        const proof: eio.ByteTree = new eio.ByteTree([
          new eio.ByteTree(commitments),
          new eio.ByteTree(responses)
        ])

        const verificationResult: boolean = cdsVerifier.verify(
          this.label,
          instances,
          crypto.sha256,
          proof.toByteArray()
        )
        recorder.record(
          verificationResult,
          this.context,
          'ZeroOrOneProof',
          'The proof of ' + this.proofTitle + ' should verify'
        )
      } else {
        const error: Error = firstError([
          zeroCommitment1,
          zeroCommitment2,
          oneCommitment1,
          oneCommitment2
        ])
        recorder.record(
          false,
          this.context,
          'ZeroOrOneProof',
          'Error loading the proof of ' + this.proofTitle + ': ' + error.message
        )
      }
    } catch (error) {
      recorder.record(
        false,
        this.context,
        'ZeroOrOneProof',
        'Error during the verification of the proof ' +
          'of ' +
          this.proofTitle +
          ': ' +
          error.message
      )
    }
  }
}
