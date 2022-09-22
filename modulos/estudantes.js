let estudantes = [
    {
        nome: 'Tiago',
        qtdFaltas: 1,
        notas: [4, 3, 10, 9],
        calcMedia: function () {
            let notasTot = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTot += this.notas[i]
            }
            media = notasTot / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Miguel',
        qtdFaltas: 8,
        notas: [8, 6, 8, 9],
        calcMedia: function () {
            let notasTot = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTot += this.notas[i]
            }
            media = notasTot / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Laura',
        qtdFaltas: 2,
        notas: [6, 6, 6, 10],
        calcMedia: function () {
            let notasTot = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTot += this.notas[i]
            }
            media = notasTot / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Vanessa',
        qtdFaltas: 0,
        notas: [4, 6, 10, 7],
        calcMedia: function () {
            let notasTot = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTot += this.notas[i]
            }
            media = notasTot / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    }
]

module.exports = estudantes