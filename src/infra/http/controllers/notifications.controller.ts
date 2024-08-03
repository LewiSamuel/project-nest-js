import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { ApiTags } from '@nestjs/swagger';

/**
 * CONTORLLER
 * Responsavel por receber as chamadas HTTP
 * Define as rotas
 */
@Controller('notifications')
@ApiTags("Notifications")
export class NotificationController {

  constructor(
    private sendNotification: SendNotification
  ) { }
  /**
   *  Definição de rota
   */

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    })

    return {
      notification: NotificationViewModel.toHttp(notification)
    }
  }

}
