import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateUserBody {
  @IsNotEmpty()
  @Length(5, 240)
  email: string;

  @IsNotEmpty()
  @Length(5, 240)
  password: string;

  @IsNotEmpty()
  @Length(5, 240)
  name: string;
}