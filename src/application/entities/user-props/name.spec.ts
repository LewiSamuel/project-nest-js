import { Name } from "./name";

describe('Testa integridade do campo NAME', () => {

  test('deve ser possivel settar um NAME valido', () => {
    const name = new Name('Lorem ipsum dolor sit amet');
    expect(name).toBeTruthy();
  });

  test('nao deve ser possivel settar um NAME com menos de 5 caracteres', () => {
    expect(() => new Name('a')).toThrow();
  })

  test('nao deve ser possivel settar um NAME com mais de 240', () => {
    expect(() => new Name('a'.repeat(241))).toThrow();
  });

})