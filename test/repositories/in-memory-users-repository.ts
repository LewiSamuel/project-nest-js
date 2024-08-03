import { User } from "@application/entities/user";
import { UsersRepository } from "@application/repositories/user-repository";


export class InMemoryUsersRepository implements UsersRepository {

  public users: User[] = [];

  async list(): Promise<User[] | []> {
    return this.users;
  }
  async delete(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }


  async findById(userId: string): Promise<User | null> {
    const user = this.users.find(user => user.id == userId);

    if(!user)
      return null;
    else
      return user;
  }

  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex(
      (item) => item.id === user.id
    )

    if(userIndex >= 0){
      this.users[userIndex] = user;
    }
  }
  

  async create(user: User) {
    this.users.push(user);
  }

}