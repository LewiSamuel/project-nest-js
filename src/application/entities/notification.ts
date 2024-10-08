import { Replace } from "src/helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "crypto";

/**
 * Interface for Notification Props
 */
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

/**
 * Class notification
 */
export class Notification {

  // private atributes
  private _id: string;
  private props: NotificationProps;

  // constructor 
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
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

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
  public cancel(){
    this.props.canceledAt = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}