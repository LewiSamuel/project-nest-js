import { Content } from "./content"
import { Notification } from "./notification";

describe('Testes de notificacao', () => {

  test('deve ser possivel criar uma notificacao', () => {
    const notification = new Notification({
      content: new Content('Example notification'),
      category: 'social',
      recipientId: 'example-recipient-id'
    });
    expect(notification).toBeTruthy();
  });

})