const MissingParamError = require('./missing-param-error')
const UnauthoridedError = require('./unauthorized-error')
const ServerError = require('./server-error')

module.exports = class HttpReponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unauthoridedError () {
    return {
      statusCode: 401,
      body: new UnauthoridedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
