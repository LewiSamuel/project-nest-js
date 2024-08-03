/**
 * Value Objects Email
 */
export class Email {
  private readonly email: string;

  /**
   * Getter
   */
  get value(): string {
    return this.email;
  }

  /**
   *  Valida tamanho da string
   * @param email 
   * @returns 
   */
  private validationLength(email: string): boolean {
    return email.length >= 5 && email.length <= 240;
  }

  /**
   * Constrói propriedade
   * @param email 
   */
  constructor(email: string) {

    // valida tamanho da string
    const isLengthValid = this.validationLength(email);

    if (!isLengthValid)
      throw new Error("Email length error.")

    this.email = email
  }
}