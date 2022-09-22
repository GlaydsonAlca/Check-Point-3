let Aluno = require('./modulos/aluno');
let Estudantes = require('./modulos/estudantes');

let curso = {
    nomeDoCurso: 'Aprovei',
    notaDeAprovacao: 6,
    faltaMax: 2,
    listaEstudante: Estudantes,
    addAluno: function (nome, qtdFaltas, nota) {
        this.listaEstudante.push(new Aluno(nome, qtdFaltas, nota))
    },
    aprovacao: function (aluno) {
        let aux = aluno
        if (aux.calcMedia() >= this.notaDeAprovacao && aux.qtdFaltas < this.faltaMax) {
            return true
        } else if (aux.qtdFaltas == this.faltaMax && aux.calcMedia() >= (this.notaDeAprovacao * 1.1)) {
            return true
        } else {
            return false
        }
    },
    aprovacaoTodos: function () {
        let aprovados = [];
        this.listaEstudante.forEach(aluno => {
            aprovados.push(this.aprovacao(aluno));
        });
        return aprovados;
    }
}

let teste = curso.aprovacaoTodos()
console.log(teste)