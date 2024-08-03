import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { User } from "@application/entities/user";
import { UsersRepository } from "@application/repositories/user-repository";
import { UserNotFound } from "@application/use-cases/errors/user-not-found";


@Injectable()
export class PrismaUsersRepository implements UsersRepository {

  constructor(
    private prismaService: PrismaService
  ) {

  }
  async list(): Promise<User[] | []> {
    const users = await this.prismaService.users.findMany({
      where: {}
    });
    return users.map(PrismaUserMapper.toDomain);
  }
  delete(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  countManyByRecipientId(recipientId: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
  async findById(userId: string): Promise<User | null> {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId,
      },
    });

    if(!user)  new UserNotFound();

    return user ? PrismaUserMapper.toDomain(user) : {} as User;
  }
  async save(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(user: User): Promise<void> {
    // mapeia entidade
    const rawUser = PrismaUserMapper.toPrisma(user);
    // executa create
    await this.prismaService.users.create({
      data: rawUser
    })
  }

}