import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notification';

/**
 * CONTORLLER
 * Responsavel por receber as chamadas HTTP
 * Define as rotas
 */
@Controller('notifications')
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
    return { notification }
  }

}
