/**
 * Value Objects Password
 */
export class Password {
  private readonly password: string;

  /**
   * Getter
   */
  get value(): string {
    return this.password;
  }

  /**
   *  Valida tamanho da string
   * @param password 
   * @returns 
   */
  private validationLength(password: string): boolean {
    return password.length >= 5 && password.length <= 240;
  }

  /**
   * Constrói propriedade
   * @param password 
   */
  constructor(password: string) {

    // valida tamanho da string
    const isLengthValid = this.validationLength(password);

    if (!isLengthValid)
      throw new Error("Password length error.")

    this.password = password
  }
}