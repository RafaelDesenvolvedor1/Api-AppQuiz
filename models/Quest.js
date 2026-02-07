module.exports = () => {
    return class Quest {
        constructor(item) {
            this.categoria = item.category;
            this.dificuldade = item.difficulty;
            this.pergunta = item.question;
            this.resposta_correta = item.correct_answer;
            this.todas_respostas = this._embaralhar([
                item.correct_answer, 
                ...item.incorrect_answers
            ]);
        }

        _embaralhar(array) {
            return array.sort(() => Math.random() - 0.5);
        }
    }
}