/**
 * Value Objects Name
 */
export class Name {
  private readonly name: string;

  /**
   * Getter
   */
  get value(): string {
    return this.name;
  }

  /**
   *  Valida tamanho da string
   * @param name 
   * @returns 
   */
  private validationLength(name: string): boolean {
    return name.length >= 5 && name.length <= 240;
  }

  /**
   * Constrói propriedade
   * @param name 
   */
  constructor(name: string) {

    // valida tamanho da string
    const isLengthValid = this.validationLength(name);

    if (!isLengthValid)
      throw new Error("Name length error.")

    this.name = name
  }
}