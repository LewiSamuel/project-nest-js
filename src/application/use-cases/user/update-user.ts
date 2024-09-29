import { Content } from "@application/entities/content";
import { User } from "@application/entities/user";
import { Email } from "@application/entities/user-props/email";
import { Name } from "@application/entities/user-props/name";
import { Password } from "@application/entities/user-props/password";
import { UsersRepository } from "@application/repositories/user-repository";
import { Injectable } from "@nestjs/common";

interface UpdateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface UpdateUserResponse {
  user: User
}

@Injectable()
export class UpdateUser {

  // injeção de dependencias
  constructor(private userRepository: UsersRepository){}

  /**
   * exececuta Update user
   * @param request 
   * @returns 
   */
  async execute(request: UpdateUserRequest): Promise<UpdateUserResponse> {

    const { name, email, password } = request;

    /**
     * Criar objeto user
     */
    const user = new User({
      name: new Name(name),
      email: new Email(email),
      password: new Password(password)
    });

    // persiste user
    await this.userRepository.update(user);

    return { user }
  }
}