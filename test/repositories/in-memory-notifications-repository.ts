import { Notification } from "src/application/entities/notification"
import { NotificationsRepository } from "src/application/repositories/notification-repository"

export class InMemoryNotificationsRepository implements NotificationsRepository {

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(item => item.recipientId == recipientId).length;
  }

  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(notfication => notfication.id == notificationId);

    if(!notification)
      return null;
    else
      return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id
    )

    if(notificationIndex >= 0){
      this.notifications[notificationIndex] = notification;
    }
  }
  

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

}