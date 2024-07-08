import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CancelNotificationRequest {
  notificationID: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {

  constructor(
    private notificationRepository: NotificationsRepository
  ){}

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {

    const { notificationID } = request;

    /// busca notification
    const notification = await this.notificationRepository.findById(notificationID);

    if(!notification){
      throw new NotificationNotFound();
    }

    // cancela notification
    notification.cancel();

    // persist
    await this.notificationRepository.save(notification);


  }
}