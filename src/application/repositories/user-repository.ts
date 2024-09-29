import { User } from "@application/entities/user";


export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(userId: string): Promise<User | null>;
  abstract update(user: User): Promise<void>;
  abstract list(): Promise<User[] | []>;
  abstract delete(user: User): Promise<void>;
}