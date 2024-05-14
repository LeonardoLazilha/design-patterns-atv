import {
  Avaliacao,
  writeTest,
  PraticalProject,
  Apresentation,
  StudentAssessment,
} from "../ClassesEInterfaces/Avaliacao";

let consoleOutput: string[] = [];
const mockedConsoleLog = (output: string) => consoleOutput.push(output);

beforeEach(() => {
  consoleOutput = [];
  console.log = mockedConsoleLog;
});

describe("ProvaEscrita", () => {
  it("deve realizar uma prova escrita", () => {
    const provaEscrita = new writeTest();
    provaEscrita.realizarAvaliacao();
    expect(consoleOutput[0]).toBe("Realizando prova escrita...");
  });
});

describe("ProjetoPratico", () => {
  it("deve realizar um projeto prático", () => {
    const projetoPratico = new PraticalProject();
    projetoPratico.realizarAvaliacao();
    expect(consoleOutput[0]).toBe("Realizando projeto prático...");
  });
});

describe("Apresentacao", () => {
  it("deve realizar uma apresentação", () => {
    const apresentacao = new Apresentation();
    apresentacao.realizarAvaliacao();
    expect(consoleOutput[0]).toBe("Realizando apresentação...");
  });
});

describe("AvaliacaoAluno", () => {
  it("deve delegar a realização da avaliação para a implementação específica", () => {
    const provaEscrita = new writeTest();
    const avaliacaoAluno = new StudentAssessment(provaEscrita);
    avaliacaoAluno.realizarAvaliacao();
    expect(consoleOutput[0]).toBe("Realizando prova escrita...");
  });
});
