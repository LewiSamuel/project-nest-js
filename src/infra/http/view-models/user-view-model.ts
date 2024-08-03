import { User } from "@application/entities/user";

export class UserViewModel {
  static toHttp(user: User){
    return {
      id: user.id,
      email: user.email?.value,
      password: user.password?.value,
      name: user.name?.value
    }
  }
}