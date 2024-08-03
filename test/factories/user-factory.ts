import { User, UserProps } from "@application/entities/user";
import { Email } from "@application/entities/user-props/email";
import { Name } from "@application/entities/user-props/name";
import { Password } from "@application/entities/user-props/password";

type Override = Partial<UserProps>

export function makeUser(override:Override = {}){
  return new User({
    name: new Name("Name of Person"),
    email: new Email("myemail@mail.com"),
    password: new Password("123123"),
    ...override
  })
}