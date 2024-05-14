import { EstadoAluno, AlunoMatriculado, AlunoFormado, AlunoContexto } from '../ClassesEInterfaces/Estado';

describe('AlunoMatriculado', () => {
    it('deve retornar a mensagem correta para aluno matriculado', () => {
        const alunoMatriculado: EstadoAluno = new AlunoMatriculado();
        expect(alunoMatriculado.mensagem()).toBe('O aluno está matriculado no curso.');
    });
});

describe('AlunoFormado', () => {
    it('deve retornar a mensagem correta para aluno formado', () => {
        const alunoFormado: EstadoAluno = new AlunoFormado();
        expect(alunoFormado.mensagem()).toBe('O aluno concluiu todos os requisitos e está formado.');
    });
});

describe('AlunoContexto', () => {
    let alunoContexto: AlunoContexto;

    beforeEach(() => {
        alunoContexto = new AlunoContexto();
    });

    it('deve iniciar com estado de aluno matriculado', () => {
        expect(alunoContexto.obterMensagemEstado()).toBe('O aluno está matriculado no curso.');
    });

    it('deve mudar para estado de aluno formado corretamente', () => {
        alunoContexto.tornarAlunoFormado();
        expect(alunoContexto.obterMensagemEstado()).toBe('O aluno concluiu todos os requisitos e está formado.');
    });
});
