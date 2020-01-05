const { MissingParamError } = require('../../utils/errors')

module.exports = class AuthUseCase {
  constructor ({
    loadUserByEmailRepository,
    updateAccessTokenRepository,
    encrypter,
    tokenGenerator
  } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.updateAccessTokenRepository = updateAccessTokenRepository
    this.encrypter = encrypter
    this.tokenGenerator = tokenGenerator
  }

  async auth (email, password) {
    this.validate(email, password)

    const user = await this.loadUserByEmailRepository.load(email)
    const isValid = user && await this.encrypter.compare(password, user.password)
    if (isValid) {
      const accessToken = await this.tokenGenerator.generate(user.id)
      this.updateAccessTokenRepository.update(user.id, accessToken)
      return accessToken
    }
    return null
  }

  validate (email, password) {
    if (!email) {
      throw new MissingParamError('email')
    }

    if (!password) {
      throw new MissingParamError('password')
    }
  }
}
