import { Module } from "@nestjs/common";  
import { PrismaService } from "./prisma/prisma.service";
import { NotificationsRepository } from "src/application/repositories/notification-repository";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";
import { UsersRepository } from "@application/repositories/user-repository";
import { PrismaUsersRepository } from "./prisma/repositories/prisma-users-repository";

@Module({
  providers: [
    /**
     * Implementa repositoris
     */
    PrismaService,
    {
      provide: NotificationsRepository, 
      useClass: PrismaNotificationsRepository
    },
    {
      provide: UsersRepository, 
      useClass: PrismaUsersRepository
    }
  ],
  exports: [
    /**
     * Implementa repositoris
     */
    NotificationsRepository,
    UsersRepository
  ]
})
export class DatabaseModule {}