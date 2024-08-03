import { Content } from "@application/entities/content";
import { User } from "@application/entities/user";
import { Email } from "@application/entities/user-props/email";
import { Name } from "@application/entities/user-props/name";
import { Password } from "@application/entities/user-props/password";
import { UsersRepository } from "@application/repositories/user-repository";
import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "../errors/notification-not-found";
import { UserNotFound } from "../errors/user-not-found";

interface ListUserRequest {
  id: string
}

interface ListUserResponse {
  user: User
}

@Injectable()
export class ListUserById {

  // injeção de dependencias
  constructor(private userRepository: UsersRepository){}

  /**
   * exececuta create user
   * @param request 
   * @returns 
   */
  async execute(request: ListUserRequest): Promise<ListUserResponse> {

    const { id } = request;

    const user = await this.userRepository.findById(id);

    if(!user){
      new UserNotFound();
    }

    return { user: user || {} as User }
  }
}