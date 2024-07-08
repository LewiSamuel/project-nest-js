import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number
};

@Injectable()
export class CountRecipientNotification {

  constructor(
    private notificationRepository: NotificationsRepository
  ){}

  async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {

    const { recipientId } = request;

    /// busca notification
    const count = await this.notificationRepository.countManyByRecipientId(recipientId);

    return {
      count
    }


  }
}