import CryptoJS from 'crypto-js'

export const GenerateKey = (
  password: string,
  salt: string
): CryptoJS.WordArray => {
  const parsedSalt = CryptoJS.enc.Hex.parse(salt)
  const key = CryptoJS.PBKDF2(password, parsedSalt, {
    keySize: 256 / 32,
    iterations: 1000,
  })
  return key;
}

export const IsValidPassword = (
  verificationToken: string,
  password: string,
  salt: string
): boolean => {
  const currentToken = CryptoJS.SHA512(salt + password)
  return currentToken.toString() === verificationToken
}

export const Encrypt = (
  data: string,
  key: CryptoJS.WordArray,
  iv: string
): string => {
  const parsedIv = CryptoJS.enc.Hex.parse(iv)
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: parsedIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.ciphertext.toString()
}

export const Decrypt = (data: string, key: CryptoJS.WordArray, iv: string) => {
  const parsedIv = CryptoJS.enc.Hex.parse(iv)
  const cipherStuff = CryptoJS.lib.CipherParams.create({
    key,
    iv: parsedIv,
    ciphertext: CryptoJS.enc.Hex.parse(data),
  })
  return CryptoJS.AES.decrypt(cipherStuff, key, {
    iv: parsedIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8)
}
