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
 * A message that has been encrypted using exponential ElGamal.
 */
export interface ElGamalMessage {
  public_key: BigNaturalNumber;
  ciphertext: BigNaturalNumber1;
  [k: string]: any;
}
