/**
 * Value Objects de Conteudo
 * Classe para gerenciar o conteudo
 */
export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validationContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validationContentLength(content);

    if (!isContentLengthValid)
      throw new Error("Content length error.")

    this.content = content
  }
}