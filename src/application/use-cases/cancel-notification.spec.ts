import { create } from "domain";
import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";



describe('cacela notificacao', () => {
  it('Ser possivel cacelar uma notificacao', async () => {

    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);
    
    const sendnotification = new SendNotification(notificationRepository);
    const { notification } = await sendnotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    });

    await cancelNotification.execute({
      notificationID: notification.id
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  })

  it('nao ser possivel cancelar uma notificacao, caso nao exista', async () => {

    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);
    
    expect(() => {
      return cancelNotification.execute({
        notificationID: 'fake-notification-id'
      });
    }).rejects.toThrow(NotificationNotFound);

  })
})