class AuthUseCase {
  async auth (email) {
    throw new Error()
  }
}

describe('Auth UseCase', () => {
  test('Should throw if no email provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow()
  })
})
