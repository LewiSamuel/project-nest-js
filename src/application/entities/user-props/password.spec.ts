import { Password } from "./password";

describe('Testa integridade do campo Password', () => {

  test('deve ser possivel settar um Password valido', () => {
    const password = new Password('Lorem ipsum dolor sit amet');
    expect(password).toBeTruthy();
  });

  test('nao deve ser possivel settar um Password com menos de 5 caracteres', () => {
    expect(() => new Password('a')).toThrow();
  })

  test('nao deve ser possivel settar um Password com mais de 240', () => {
    expect(() => new Password('a'.repeat(241))).toThrow();
  });

})