module.exports = app => {
    const { listarPerguntas } = app.controller.quizController
    const { listarCategorias } = app.controller.categoriaController
    const { getIdiomasDisponiveis } = app.services.translateService;

    app.get('/quiz/categorias', listarCategorias);
    app.get('/quiz/idiomas', getIdiomasDisponiveis);

    app.get('/quiz/:lang', listarPerguntas);
    app.get('/quiz/:lang/:category', listarPerguntas);
    app.get('/quiz', listarPerguntas);
}