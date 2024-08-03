import { Email } from "./email";

describe('Testa integridade do campo Email', () => {

  test('deve ser possivel settar um Email valido', () => {
    const email = new Email('Lorem ipsum dolor sit amet');
    expect(email).toBeTruthy();
  });

  test('nao deve ser possivel settar um Email com menos de 5 caracteres', () => {
    expect(() => new Email('a')).toThrow();
  })

  test('nao deve ser possivel settar um Email com mais de 240', () => {
    expect(() => new Email('a'.repeat(241))).toThrow();
  });

})