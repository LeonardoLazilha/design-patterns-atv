// Importando a classe Biblioteca
import { Biblioteca } from "../ClassesEInterfaces/Biblioteca";

// Testes
describe('Biblioteca Singleton', () => {
    it('deve criar apenas uma instância da Biblioteca', () => {
        const biblioteca1 = Biblioteca.getInstance();
        const biblioteca2 = Biblioteca.getInstance();
        
        expect(biblioteca1).toBe(biblioteca2);
    });

    it('deve retornar todos os livros da biblioteca', () => {
        const biblioteca = Biblioteca.getInstance();
        biblioteca.addLivro("Livro 1");
        biblioteca.addLivro("Livro 2");
        biblioteca.addLivro("Livro 3");
        
        expect(biblioteca.getLivros()).toEqual(["Livro 1", "Livro 2", "Livro 3"]);
    });
});
