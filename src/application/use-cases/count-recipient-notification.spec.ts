import { create } from "domain";
import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { CountRecipientNotification } from "./count-recipient-notifications";



describe('conta notificacoes', () => {
  it('Ser possivel contar  notificacao', async () => {

    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(notificationRepository);
    
    const sendnotification = new SendNotification(notificationRepository);

    await sendnotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-1'
    });

    await sendnotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-1'
    });

    await sendnotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-2'
    });

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-1'
    });

    expect(count).toEqual(2);
  })

})