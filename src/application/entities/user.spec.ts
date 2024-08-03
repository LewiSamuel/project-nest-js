import { makeUser } from "@test/factories/user-factory";

describe('Testes de USER', () => {

  test('deve ser possivel criar um User', () => {
    const user = makeUser();
    expect(user).toBeTruthy();
  });

})