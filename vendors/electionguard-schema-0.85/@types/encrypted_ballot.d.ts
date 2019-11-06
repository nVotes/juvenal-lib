/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The one-time public key `a = gʳ`, where `r` is the randomly generated one-time public key.
 */
export type BigNaturalNumber = string | number;
/**
 * The encoding `b = gᵐ hʳ`, where `m` is the cleartext and `h` is the recipient public key being used for encryption.
 */
export type BigNaturalNumber1 = string | number;
/**
 * The challenge value `c` that is produced by hashing relevent parameters, including the original ElGamal message `(a,b)` and the zero message `(α, β)`.
 */
export type BigUint = string | number;
/**
 * The response `u = t + c r mod (p-1)` to the challenge `c`, where `r` is the one-time private key used to encrypt the original message and `t` is the one-time private key used to encrypt the zero message used in this proof.
 */
export type BigUint1 = string | number;

/**
 * An encrypted ballot, consisting of the encrypted selections for each contest, their proofs of well-formedness, and information about where and when the ballot was encrypted.
 */
export interface EncryptedBallot {
  contests: [EncryptedContest, ...(EncryptedContest)[]];
  ballot_info: BallotInformation;
  [k: string]: any;
}
/**
 * A contests consists of a list of encrypted selections, along with a proof that exactly `L` of them have been selected.
 */
export interface EncryptedContest {
  /**
   * The encrypted selections made on the ballot.
   */
  selections: [EncryptedSelection, ...(EncryptedSelection)[]];
  /**
   * The maximum number of selections `L` that can be made in this contest.
   */
  max_selections: number;
  num_selections_proof: ChaumPedersenProof1;
  [k: string]: any;
}
/**
 * A single selection in a contest, which contains the encrypted value of the selection (zero or one), as well as a zero-knowledge proof that the encrypted value is either a zero or a one. Both a proof that the selection is zero and a proof that the selection is one are always included, but depending on the actual value of the selection, one of the proofs is "faked" in a way that makes the verification go through. The verifier cannot and (need not) determine which proof is "real" and which is "faked", but instead verifies that one of them must be real.
 */
export interface EncryptedSelection {
  message: ElGamalMessage;
  zero_proof: ChaumPedersenProof;
  one_proof: ChaumPedersenProof;
  [k: string]: any;
}
/**
 * A message that has been encrypted using exponential ElGamal.
 */
export interface ElGamalMessage {
  public_key: BigNaturalNumber;
  ciphertext: BigNaturalNumber1;
  [k: string]: any;
}
/**
 * A non-interactive zero-knowledge Chaum-Pedersen proof shows that an ElGamal message `(a,b) = (gʳ, gᵐ hʳ)` is actually an encryption of zero (`m = 0`) without revealing the nonce `r` used to encode it. This can be used to show that two ElGamal messages encrypt the same message, by creating a Chaum-Pedersen proof for their quotient `(a₁/a₂, b₁/b₂) = (gʳ¹⁻ʳ², gᵐ¹⁻ᵐ² hʳ¹⁻ʳ²)`.
 */
export interface ChaumPedersenProof {
  commitment: ElGamalMessage1;
  challenge: BigUint;
  response: BigUint1;
  [k: string]: any;
}
/**
 * An ElGamal message `(α, β)` encoding zero. This is useful because you can only combine two ciphertexts if they both encode zero, as in the equation `hᵘ = hᵗ⁺ᶜʳ = hᵗ (hʳ)ᶜ = β bᶜ`. This acts as a commitment to the one-time private key `t` used in this proof.
 */
export interface ElGamalMessage1 {
  public_key: BigNaturalNumber;
  ciphertext: BigNaturalNumber1;
  [k: string]: any;
}
/**
 * A proof that the sum of the selections is equal to `L`, by proving that their difference is zero.
 */
export interface ChaumPedersenProof1 {
  commitment: ElGamalMessage1;
  challenge: BigUint;
  response: BigUint1;
  [k: string]: any;
}
/**
 * Auxiliary information about a ballot other than the selections made by the voter.
 */
export interface BallotInformation {
  /**
   * Information about the device that encrypted the ballot
   */
  device_info: string;
  /**
   * The date the ballot was encrypted.
   */
  date: string;
  /**
   * The time the ballot was encrypted.
   */
  time: string;
  /**
   * The tracker code generated for this ballot.
   */
  tracker: string;
  [k: string]: any;
}
