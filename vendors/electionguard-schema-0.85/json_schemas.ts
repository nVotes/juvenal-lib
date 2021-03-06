/* tslint:disable */
/**
* This file was automatically generated by generate_election_record_types.js.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

interface SchemaDict {
  [k: string]: any;
};

export const schemas: SchemaDict = {
 'ballot_coding.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "ballot_coding.schema.json",
  "definitions": {
    "BMDConfig": {
      "properties": {
        "requireActivation": {
          "type": "boolean"
        },
        "showHelpPage": {
          "type": "boolean"
        },
        "showSettingsPage": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "BallotStyle": {
      "properties": {
        "districts": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "id": {
          "type": "string"
        },
        "partyId": {
          "type": "string"
        },
        "precincts": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "districts",
        "id",
        "precincts"
      ],
      "type": "object"
    },
    "Candidate": {
      "properties": {
        "id": {
          "type": "string"
        },
        "isWriteIn": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "partyId": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name"
      ],
      "type": "object"
    },
    "CandidateContest": {
      "properties": {
        "allowWriteIns": {
          "type": "boolean"
        },
        "candidates": {
          "items": {
            "$ref": "#/definitions/Candidate"
          },
          "type": "array"
        },
        "districtId": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "partyId": {
          "type": "string"
        },
        "seats": {
          "type": "number"
        },
        "section": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "enum": [
            "candidate"
          ],
          "type": "string"
        }
      },
      "required": [
        "allowWriteIns",
        "candidates",
        "districtId",
        "id",
        "seats",
        "section",
        "title",
        "type"
      ],
      "type": "object"
    },
    "County": {
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name"
      ],
      "type": "object"
    },
    "District": {
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name"
      ],
      "type": "object"
    },
    "Party": {
      "properties": {
        "abbrev": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "abbrev",
        "id",
        "name"
      ],
      "type": "object"
    },
    "Precinct": {
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "name"
      ],
      "type": "object"
    },
    "YesNoContest": {
      "properties": {
        "description": {
          "type": "string"
        },
        "districtId": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "partyId": {
          "type": "string"
        },
        "section": {
          "type": "string"
        },
        "shortTitle": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "enum": [
            "yesno"
          ],
          "type": "string"
        }
      },
      "required": [
        "description",
        "districtId",
        "id",
        "section",
        "shortTitle",
        "title",
        "type"
      ],
      "type": "object"
    }
  },
  "properties": {
    "ballotStyles": {
      "items": {
        "$ref": "#/definitions/BallotStyle"
      },
      "type": "array"
    },
    "bmdConfig": {
      "$ref": "#/definitions/BMDConfig"
    },
    "contests": {
      "items": {
        "anyOf": [
          {
            "$ref": "#/definitions/CandidateContest"
          },
          {
            "$ref": "#/definitions/YesNoContest"
          }
        ]
      },
      "type": "array"
    },
    "county": {
      "$ref": "#/definitions/County"
    },
    "date": {
      "type": "string"
    },
    "districts": {
      "items": {
        "$ref": "#/definitions/District"
      },
      "type": "array"
    },
    "parties": {
      "items": {
        "$ref": "#/definitions/Party"
      },
      "type": "array"
    },
    "precincts": {
      "items": {
        "$ref": "#/definitions/Precinct"
      },
      "type": "array"
    },
    "seal": {
      "type": "string"
    },
    "sealURL": {
      "type": "string"
    },
    "state": {
      "type": "string"
    },
    "title": {
      "type": "string"
    }
  },
  "required": [
    "ballotStyles",
    "contests",
    "county",
    "date",
    "districts",
    "parties",
    "precincts",
    "state",
    "title"
  ],
  "type": "object"
}
,

 'ballot_decryption.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "ballot_decryption.schema.json",
  "title": "BallotDecryption",
  "description": "A decryption of an encrypted ballot that was spoiled.",
  "type": "object",
  "properties": {
    "contests": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SelectionDecryption"
        },
        "minItems": 1
      },
      "minItems": 1
    },
    "ballot_info": {
      "$ref": "ballot_info.schema.json"
    }
  },
  "required": [
    "contests",
    "ballot_info"
  ],
  "definitions": {
    "SelectionDecryption": {
      "description": "The decryption of the selection, including the encrypted message, the decrypted message, the decryption shares, and the cleartext.",
      "type": "object",
      "properties": {
        "encrypted_message": {
          "description": "The encrypted message of the selection (the one or zero).",
          "$ref": "elgamal_message.schema.json"
        },
        "decrypted_message": {
          "description": "The decrypted message of the selection.",
          "$ref": "big_nat.schema.json"
        },
        "shares": {
          "description": "The decryption shares `M_i` used to compute the decryption `M`.",
          "type": "array",
          "items": {
            "$ref": "decryption_share.schema.json"
          },
          "minItems": 1
        },
        "cleartext": {
          "description": "The actual value encrypted, so either a zero or a one.",
          "type": "integer",
          "minimum": 0,
          "maximum": 1
        }
      },
      "required": [
        "encrypted_message",
        "decrypted_message",
        "shares",
        "cleartext"
      ]
    }
  }
}
,

 'ballot_info.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "ballot_info.schema.json",
  "title": "Ballot Information",
  "description": "Auxiliary information about a ballot other than the selections made by the voter.",
  "type": "object",
  "properties": {
    "device_info": {
      "description": "Information about the device that encrypted the ballot",
      "type": "string"
    },
    "date": {
      "description": "The date the ballot was encrypted.",
      "type": "string"
    },
    "time": {
      "description": "The time the ballot was encrypted.",
      "type": "string"
    },
    "tracker": {
      "description": "The tracker code generated for this ballot.",
      "type": "string"
    }
  },
  "required": [
    "device_info",
    "date",
    "time",
    "tracker"
  ]
}
,

 'big_nat.schema.json': {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "big_nat.schema.json",
    "title": "Big natural number",
    "description": "A unsigned integer, which can be given as a string or a number, not including the number zero.",
    "oneOf": [
        {
            "type": "string",
            "pattern": "^[0-9]*[1-9]+[0-9]*$"
        },
        {
            "type": "integer",
            "minimum": 1
        }
    ]
  }
  ,

 'big_uint.schema.json': {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "big_uint.schema.json",
    "title": "Big uint",
    "description": "A big unsigned integer, which can be given as a string or a number, starting from zero.",
    "oneOf": [
        {
            "type": "string",
            "pattern": "^[0-9]+$"
        },
        {
            "type": "integer",
            "minimum": 0
        }
    ]
  }
  ,

 'chaum_pedersen.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "chaum_pedersen.schema.json",
  "title": "Chaum-Pedersen Proof",
  "description": "A non-interactive zero-knowledge Chaum-Pedersen proof shows that an ElGamal message `(a,b) = (gʳ, gᵐ hʳ)` is actually an encryption of zero (`m = 0`) without revealing the nonce `r` used to encode it. This can be used to show that two ElGamal messages encrypt the same message, by creating a Chaum-Pedersen proof for their quotient `(a₁/a₂, b₁/b₂) = (gʳ¹⁻ʳ², gᵐ¹⁻ᵐ² hʳ¹⁻ʳ²)`.",
  "type": "object",
  "properties": {
    "commitment": {
      "description": "An ElGamal message `(α, β)` encoding zero. This is useful because you can only combine two ciphertexts if they both encode zero, as in the equation `hᵘ = hᵗ⁺ᶜʳ = hᵗ (hʳ)ᶜ = β bᶜ`. This acts as a commitment to the one-time private key `t` used in this proof.",
      "$ref": "elgamal_message.schema.json"
    },
    "challenge": {
      "description": "The challenge value `c` that is produced by hashing relevent parameters, including the original ElGamal message `(a,b)` and the zero message `(α, β)`.",
      "$ref": "big_uint.schema.json"
    },
    "response": {
      "description": "The response `u = t + c r mod (p-1)` to the challenge `c`, where `r` is the one-time private key used to encrypt the original message and `t` is the one-time private key used to encrypt the zero message used in this proof.",
      "$ref": "big_uint.schema.json"
    }
  },
  "required": [
    "commitment",
    "challenge",
    "response"
  ]
}
,

 'decryption_share.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "decryption_share.schema.json",
  "title": "DecryptionShare",
  "description": "A single trustee's share of a decryption of some encrypted message `(a, b)`. The encrypted message can be an encrypted tally or an encrypted ballot.",
  "type": "object",
  "properties": {
    "share": {
      "description": "The share of the decrypted message `M_i`.",
      "$ref": "big_uint.schema.json"
    },
    "proof": {
      "description": "The proof that the share encodes the same value as the encrypted message.",
      "$ref": "chaum_pedersen.schema.json"
    },
    "fragments": {
      "description": "The `k` fragments used to reconstruct this decryption share, if this trustee was absent.",
      "type": "array",
      "items": {
        "$ref": "#/definitions/DecryptionFragment"
      },
      "minItems": 1
    }
  },
  "required": [
    "share",
    "proof"
  ],
  "definitions": {
    "DecryptionFragment": {
      "description": "A fragment of a missing trustee's share of a decryption, including the LaGrange coefficient.",
      "type": "object",
      "properties": {
        "trustee_index": {
          "description": "The index of the trustee who produced this fragment.",
          "type": "integer",
          "minimum": 1
        },
        "fragment": {
          "description": "The actual fragment `M_{i,j}` which is trustee `j`'s piece of the missing trustee `i`'s share of a decryption.",
          "$ref": "big_nat.schema.json"
        },
        "lagrange_coefficient": {
          "description": "The LaGrange coefficient `w_{i,j}` used to compute the decryption share from the fragments.",
          "$ref": "big_uint.schema.json"
        },
        "proof": {
          "description": "The proof that the fragment encodes the same values as the encrypted message",
          "$ref": "chaum_pedersen.schema.json"
        }
      },
      "required": [
        "trustee_index",
        "fragment",
        "lagrange_coefficient",
        "proof"
      ]
    }
  }
}
,

 'election_parameters.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "election_parameters.schema.json",
  "title": "ElectionParameters",
  "description": "All the parameters necessary to form the election.",
  "type": "object",
  "properties": {
    "date": {
      "description": "The date on which the election takes place.",
      "type": "string"
    },
    "location": {
      "description": "The location where the election takes place",
      "type": "string"
    },
    "ballotCodingFile": {
      "description": "The configuration file used in the election.",
      "$ref": "ballot_coding.schema.json"
    },
    "prime": {
      "description": "The safe prime modulus `p`",
      "$ref": "big_uint.schema.json"
    },
    "generator": {
      "description": "The generator `g` of the multiplicative subgroup `Z^*_q`, where `p = 2q + 1`.",
      "$ref": "big_nat.schema.json"
    },
    "num_trustees": {
      "description": "The number of election trustees `n`.",
      "type": "integer",
      "minimum": 1
    },
    "threshold": {
      "description": "The threshold `k` of trustees required to complete verification.",
      "type": "integer",
      "minimum": 1
    }
  },
  "required": [
    "date",
    "location",
    "prime",
    "generator",
    "num_trustees",
    "threshold"
  ]
}
,

 'election_record.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "election_record.schema.json",
  "title": "ElectionRecord",
  "description": "All data from an ElectionGuard election.",
  "type": "object",
  "properties": {
    "parameters": {
      "$ref": "election_parameters.schema.json"
    },
    "base_hash": {
      "description": "The base hash `Q` which is a SHA-256 hash of eleciton parameters including the prime modulus, generator, number of trustees, decryption threshold value, date, and jurisdictional information, as well as the contest configurations.",
      "$ref": "#/definitions/Hash"
    },
    "trustee_public_keys": {
      "description": "The public keys/coefficient commitments for each trustee.",
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "public_key": {
              "description": "An ElGamal public key.",
              "$ref": "big_nat.schema.json"
            },
            "proof": {
              "description": "A proof of posession of the private key.",
              "$ref": "schnorr_proof.schema.json"
            }
          },
          "required": [
            "public_key",
            "proof"
          ]
        },
        "minItems": 1
      },
      "minItems": 1
    },
    "joint_public_key": {
      "description": "The election public key `K`.",
      "$ref": "big_nat.schema.json"
    },
    "extended_base_hash": {
      "description": "The extended base hash `Q̅`.",
      "$ref": "#/definitions/Hash"
    },
    "cast_ballots": {
      "description": "The encrypted ballots cast in the election.",
      "type": "array",
      "items": {
        "$ref": "encrypted_ballot.schema.json"
      }
    },
    "spoiled_ballots": {
      "description": "The decryptions of the ballots spoiled in the election, including their encrypted selections, their decrypted selections, the cleartext of each selection, and proofs of the correctness of the decryptions.",
      "type": "array",
      "items": {
        "$ref": "ballot_decryption.schema.json"
      }
    },
    "contest_tallies": {
      "description": "The decryptions of the tallies of each option for each contests in the election.",
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "$ref": "tally_decryption.schema.json"
        },
        "minItems": 1
      },
      "minItems": 1
    }
  },
  "required": [
    "parameters",
    "base_hash",
    "trustee_public_keys",
    "joint_public_key",
    "extended_base_hash",
    "cast_ballots",
    "spoiled_ballots",
    "contest_tallies"
  ],
  "definitions": {
    "Hash": {
      "type": "string",
      "pattern": "^[0-9a-f]+$"
    }
  }
}
,

 'elgamal_message.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "elgamal_message.schema.json",
  "title": "ElGamal Message",
  "description": "A message that has been encrypted using exponential ElGamal.",
  "type": "object",
  "properties": {
    "public_key": {
      "description": "The one-time public key `a = gʳ`, where `r` is the randomly generated one-time public key.",
      "$ref": "big_nat.schema.json"
    },
    "ciphertext": {
      "description": "The encoding `b = gᵐ hʳ`, where `m` is the cleartext and `h` is the recipient public key being used for encryption.",
      "$ref": "big_nat.schema.json"
    }
  },
  "required": [
    "public_key",
    "ciphertext"
  ]
}
,

 'encrypted_ballot.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "encrypted_ballot.schema.json",
  "title": "EncryptedBallot",
  "description": "An encrypted ballot, consisting of the encrypted selections for each contest, their proofs of well-formedness, and information about where and when the ballot was encrypted.",
  "type": "object",
  "properties": {
    "contests": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/EncryptedContest"
      },
      "minItems": 1
    },
    "ballot_info": {
      "$ref": "ballot_info.schema.json"
    }
  },
  "required": [
    "contests",
    "ballot_info"
  ],
  "definitions": {
    "EncryptedContest": {
      "description": "A contests consists of a list of encrypted selections, along with a proof that exactly `L` of them have been selected.",
      "type": "object",
      "properties": {
        "selections": {
          "description": "The encrypted selections made on the ballot.",
          "type": "array",
          "items": {
            "$ref": "#/definitions/EncryptedSelection"
          },
          "minItems": 1
        },
        "max_selections": {
          "description": "The maximum number of selections `L` that can be made in this contest.",
          "type": "integer",
          "minimum": 1
        },
        "num_selections_proof": {
          "description": "A proof that the sum of the selections is equal to `L`, by proving that their difference is zero.",
          "$ref": "chaum_pedersen.schema.json"
        }
      },
      "required": [
        "selections",
        "max_selections",
        "num_selections_proof"
      ]
    },
    "EncryptedSelection": {
      "description": "A single selection in a contest, which contains the encrypted value of the selection (zero or one), as well as a zero-knowledge proof that the encrypted value is either a zero or a one. Both a proof that the selection is zero and a proof that the selection is one are always included, but depending on the actual value of the selection, one of the proofs is \"faked\" in a way that makes the verification go through. The verifier cannot and (need not) determine which proof is \"real\" and which is \"faked\", but instead verifies that one of them must be real.",
      "type": "object",
      "properties": {
        "message": {
          "$ref": "elgamal_message.schema.json"
        },
        "zero_proof": {
          "$ref": "chaum_pedersen.schema.json"
        },
        "one_proof": {
          "$ref": "chaum_pedersen.schema.json"
        }
      },
      "required": [
        "message",
        "zero_proof",
        "one_proof"
      ]
    }
  }
}
,

 'schnorr_proof.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "schnorr_proof.schema.json",
  "title": "Schnorr Proof",
  "description": "A non-interactive zero-knowledge proof of knowledge of a private key `s` corresponding to a public key `h`.",
  "type": "object",
  "properties": {
    "commitment": {
      "description": "The one-use public key `k = gʳ` generated from the random one-use private key `r`. This acts as a committment to `r`.",
      "$ref": "big_nat.schema.json"
    },
    "challenge": {
      "description": "The challenge `c` that is produced by hashing relevent parameters, including the original public key `h` and the one-time public key `k`.",
      "$ref": "big_uint.schema.json"
    },
    "response": {
      "description": "The response `u = r + c s mod (p - 1)` to the challenge, where `r` is the one-time private key corresponding to the one-time public key `k`, and `s` is the private-key corresponding to the original public key `h`.",
      "$ref": "big_uint.schema.json"
    }
  },
  "required": [
    "commitment",
    "challenge",
    "response"
  ]
}
,

 'tally_decryption.schema.json': {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "tally_decryption.schema.json",
  "title": "Tally Decryption",
  "description": "A decryption of the encrypted tally of a single option in a contest.",
  "type": "object",
  "properties": {
    "encrypted_tally": {
      "$ref": "elgamal_message.schema.json"
    },
    "decrypted_tally": {
      "description": "The decrypted tally `M`.",
      "$ref": "big_nat.schema.json"
    },
    "shares": {
      "description": "The decryption shares `M_i` used to compute the decrypted tally `M`.",
      "type": "array",
      "items": {
        "$ref": "decryption_share.schema.json"
      },
      "minItems": 1
    },
    "cleartext": {
      "description": "The actual tally encrypted.",
      "type": "integer",
      "minimum": 0
    }
  },
  "required": [
    "encrypted_tally",
    "decrypted_tally",
    "shares",
    "cleartext"
  ]
}
,

};
