class TokenGenerator {
  async generate (id) {
    return null
  }
}

const makeSut = () => {
  return new TokenGenerator()
}

describe('Token Generator', () => {
  test('Should return null if jwt returns null', async () => {
    const sut = makeSut()
    const token = await sut.generate('any_id')
    expect(token).toBe(null)
  })

  // test('Should return false if validator return false', () => {
  //   validator.isEmailValid = false
  //   const sut = makeSut()
  //   const isEmailValid = sut.isValid('invalid_email@email.com')

  //   expect(isEmailValid).toBe(false)
  // })

  // test('Should call validator witch correct email', () => {
  //   const sut = makeSut()
  //   sut.isValid('any_email@email.com')

  //   expect(validator.email).toBe('any_email@email.com')
  // })

  // test('Should throw if no email is provided', async () => {
  //   const sut = makeSut()
  //   expect(() => { sut.isValid() }).toThrow(new MissingParamError('email'))
  // })
})
