const bcrypt = require('bcrypt')
const MissingParamError = require('../errors/missing-param-error')

module.exports = class Encrypter {
  async compare (value, hash) {
    this.validate(value, hash)

    this.value = value
    this.hash = hash
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }

  validate (value, hash) {
    if (!value) {
      throw new MissingParamError('value')
    }

    if (!hash) {
      throw new MissingParamError('hash')
    }
  }
}
