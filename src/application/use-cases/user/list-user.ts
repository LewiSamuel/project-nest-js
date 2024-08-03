import { Content } from "@application/entities/content";
import { User } from "@application/entities/user";
import { Email } from "@application/entities/user-props/email";
import { Name } from "@application/entities/user-props/name";
import { Password } from "@application/entities/user-props/password";
import { UsersRepository } from "@application/repositories/user-repository";
import { Injectable } from "@nestjs/common";

interface ListUserRequest {

}

interface ListUserResponse {
  users: User[]
}

@Injectable()
export class ListUser {

  // injeção de dependencias
  constructor(private userRepository: UsersRepository){}

  /**
   * exececuta create user
   * @param request 
   * @returns 
   */
  async execute(request: ListUserRequest): Promise<ListUserResponse> {

    const {  } = request;

    // persiste user
    const users = await this.userRepository.list();

    return { users }
  }
}