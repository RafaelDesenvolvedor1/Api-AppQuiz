module.exports = () => {
    return {
        listarCategorias: async (req, res) => {
            try {
                const response = await fetch('https://opentdb.com/api_category.php');
                const data = await response.json();

                // Retorna a lista oficial
                res.json(data.trivia_categories);
            } catch (error) {
                res.status(500).json({ erro: "Não foi possível buscar as categorias" });
            }
        }
    }
}