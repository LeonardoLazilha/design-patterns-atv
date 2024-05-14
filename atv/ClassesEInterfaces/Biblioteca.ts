export class Biblioteca {
  private static instance: Biblioteca | null = null;
  private livros: string[];

  private constructor() {
    this.livros = [];
  }

  public static getInstance(): Biblioteca {
    if (!Biblioteca.instance) {
      Biblioteca.instance = new Biblioteca();
    }
    return Biblioteca.instance;
  }

  public addLivro(bookTitle: string): void {
    this.livros.push(bookTitle);
  }

  public getLivros(): string[] {
    return this.livros;
  }
}
