import { create } from "domain";
import { SendNotification } from "./send-notification";
import { Notification } from "../entities/notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";



describe('conta notificacoes', () => {
  it('Ser possivel contar  notificacao', async () => {

    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(notificationRepository);

    await notificationRepository.create(makeNotification({recipientId: 'example-recipient-1'}));
    await notificationRepository.create(makeNotification({recipientId: 'example-recipient-1'}));
    await notificationRepository.create(makeNotification({recipientId: 'example-recipient-2'}));

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-1'
    });

    expect(count).toEqual(2);
  })

})