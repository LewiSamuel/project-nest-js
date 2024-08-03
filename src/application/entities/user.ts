import { Replace } from "src/helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "crypto";
import { Name } from "./user-props/name";
import { Email } from "./user-props/email";
import { Password } from "./user-props/password";

/**
 * Interface for User Props
 */
export interface UserProps {
  name: Name;
  email: Email;
  password: Password;
  createdAt: Date;
}

/**
 * Class User
 */
export class User {

  // private atributes
  private _id: string;
  private props: UserProps;

  // constructor 
  constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    };
  }

  /**
   * Getters e Setters
   */

  public get id() {
    return this._id
  }

  public get name(){
    return this.props.name;
  }
  public set name(name: Name){
    this.props.name = name;
  }


  public get email(){
    return this.props.email;
  }
  public set email(email: Email){
    this.props.email = email;
  }


  public get password(){
    return this.props.password;
  }
  public set password(password: Password){
    this.props.password = password;
  }


  

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}