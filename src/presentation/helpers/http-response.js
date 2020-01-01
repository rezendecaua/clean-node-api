const MissingParamError = require('./missing-param-error')
const UnauthoridedError = require('./unauthorized-error')

module.exports = class HttpReponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthoridedError () {
    return {
      statusCode: 401,
      body: new UnauthoridedError()
    }
  }
}
