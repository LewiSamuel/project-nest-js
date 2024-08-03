import { User } from "@application/entities/user";
import { Email } from "@application/entities/user-props/email";
import { Name } from "@application/entities/user-props/name";
import { Password } from "@application/entities/user-props/password";
import { Users as RawUser } from "@prisma/client";

export class PrismaUserMapper {
  static toPrisma(user: User){
    return {
      id: user.id,
      name: user.name.value,
      email: user.email.value,
      password: user.password.value,
      createdAt: user.createdAt
    }
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        name: new Name(raw.name),
        email: new Email(raw.email),
        password: new Password(raw.password)
      },
      raw.id,
    );
  }
}