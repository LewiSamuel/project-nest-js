import { create } from "domain";
import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";



describe('envia notificacao', () => {
  it('Ser possivel enviar uma notificacao', async () => {

    const notificationRepository = new InMemoryNotificationsRepository();
    const sendnotification = new SendNotification(notificationRepository);

    const { notification } = await sendnotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  })
})