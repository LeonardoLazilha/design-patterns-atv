export interface EstadoAluno {
  mensagem(): string;
}

export class AlunoMatriculado implements EstadoAluno {
  mensagem(): string {
    return "O aluno está matriculado no curso.";
  }
}

export class AlunoFormado implements EstadoAluno {
  mensagem(): string {
    return "O aluno concluiu todos os requisitos e está formado.";
  }
}

export class AlunoContexto {
  private estadoAtual: EstadoAluno;

  constructor() {
    this.estadoAtual = new AlunoMatriculado();
  }

  tornarAlunoFormado(): void {
    this.estadoAtual = new AlunoFormado();
  }

  obterMensagemEstado(): string {
    return this.estadoAtual.mensagem();
  }
}
