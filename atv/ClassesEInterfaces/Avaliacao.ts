export interface Avaliacao {
  realizarAvaliacao(): void;
}

export class writeTest implements Avaliacao {
  realizarAvaliacao(): void {
    console.log("Realizando prova escrita...");
  }
}

export class PraticalProject implements Avaliacao {
  realizarAvaliacao(): void {
    console.log("Realizando projeto prático...");
  }
}

export class Apresentation implements Avaliacao {
  realizarAvaliacao(): void {
    console.log("Realizando apresentação...");
  }
}

export class StudentAssessment implements Avaliacao {
  constructor(private avaliacao: Avaliacao) {}

  realizarAvaliacao(): void {
    this.avaliacao.realizarAvaliacao();
  }
}
