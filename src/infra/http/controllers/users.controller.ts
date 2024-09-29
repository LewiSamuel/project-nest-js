import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../view-models/user-view-model';
import { CreateUser } from '@application/use-cases/user/create-user';
import { ListUser } from '@application/use-cases/user/list-user';
import { ApiTags } from '@nestjs/swagger';
import { ListUserById } from '@application/use-cases/user/list-user-by-id';

/**
 * CONTORLLER
 * Responsavel por receber as chamadas HTTP
 * Define as rotas
 */
@Controller('user')
@ApiTags("User")
export class UserController {

  constructor(
    private createUser: CreateUser,
    private updateUser: CreateUser,
    private listUser: ListUser,
    private listUserById: ListUserById
  ) {}
  /**
   *  Definição de rota
   */

  @Get()
  async list() {
    const { users } = await this.listUser.execute({})
    return {
      users: users.map(UserViewModel.toHttp)
    }
  }

  
  @Get(':id')
  async listById(@Param() params:any) {
    const userId = params.id
    const { user } = await this.listUserById.execute({id: userId})
    return {
      user: user ? UserViewModel.toHttp(user) : {}
    }
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, email, password } = body;

    const { user } = await this.createUser.execute({ name, email, password })

    return {
      user: UserViewModel.toHttp(user)
    }
  }
  
  @Put()
  async update(@Body() body: CreateUserBody) {
    const { name, email, password } = body;

    const { user } = await this.updateUser.execute({ name, email, password })

    return {
      user: UserViewModel.toHttp(user)
    }
  }

}
