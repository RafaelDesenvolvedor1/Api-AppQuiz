module.exports = app => {

    const { traduzirTexto, traduzirVarias } = app.services.translateService;
    const { Quest } = app.models;

    return {
        listarPerguntas: async (req, res) => {
            // Faz requisição na api do Open Trivia DB
            try {
        
                const idiomaDestino = req.params.lang || 'pt';
                const categoria = req.params.category || null;

                let url = 'https://opentdb.com/api.php?amount=10&type=multiple';

                if(categoria){
                    url += `&category=${categoria}`;
                }

                const response = await fetch(url);

                const data = await response.json();

                // const perguntas = data.results.map(item => new Quest(item));

                const perguntasProcessadas = await Promise.all(data.results.map(async (item) => {
                    // Traduzindo os campos separadamente via service
                    const perguntaPt = await traduzirTexto(item.question, idiomaDestino);
                    const corretaPt = await traduzirTexto(item.correct_answer, idiomaDestino);
                    const incorretasPt = await traduzirVarias(item.incorrect_answers, idiomaDestino);

                    // Criando o objeto com os dados já traduzidos
                    return new Quest({
                        category: item.category,
                        difficulty: item.difficulty,
                        question: perguntaPt,
                        correct_answer: corretaPt,
                        incorrect_answers: incorretasPt
                    });
                }));

                res.json(perguntasProcessadas);
            } catch (error) {
                res.status(500).json({ erro: "Erro ao processar quiz traduzido" });
            }
        }
    }
}