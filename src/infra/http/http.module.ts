import { Module } from "@nestjs/common";
import { SendNotification } from "src/application/use-cases/send-notification";
import { CreateUser } from "@application/use-cases/user/create-user";
import { DatabaseModule } from "@infra/database/database.module";
import { NotificationController } from "./controllers/notifications.controller";
import { UserController } from "./controllers/users.controller";
import { ListUser } from "@application/use-cases/user/list-user";
import { ListUserById } from "@application/use-cases/user/list-user-by-id";

@Module({
  imports: [DatabaseModule],
  controllers: [
    /**
     * Lista Controllers
     */
    NotificationController,
    UserController
  ],
  providers: [
    /**
     * Lista Casos de Uso
     */
    SendNotification,
    CreateUser,
    ListUser,
    ListUserById
  ]
})
export class HttpModule {}