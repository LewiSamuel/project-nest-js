import { Content } from "./content"

describe('Testes de conteudo de notificacao', () => {

  test('deve ser possivel criar o conteudo da notificacao', () => {
    const content = new Content('Voce recebeu uma solicitacoa de amizade');
    expect(content).toBeTruthy();
  });

  test('nao deve ser possivel criar um conteudo com menos de 5 caracteres', () => {
    expect(() => new Content('Voce')).toThrow();
  })

  test('nao deve ser possivel criar um conteudo com mais de 240', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });

})