const translate = require('google-translate-api-x');
const { languages } = translate;

module.exports = () => {
    return {
        traduzirTexto: async (Texto, idioma = 'pt') => {
            try {
                const res = await translate(Texto, { to: idioma });
                return res.text;
            } catch (error) {
                console.error("Erro na tradução:", error);
                return Texto; // Fallback: retorna o original se falhar
            }
        },

        traduzirVarias: async (lista, idioma = 'pt') => {
            return Promise.all(lista.map(t => translate(t, { to: idioma }).then(res => res.text)));
        },
        getIdiomasDisponiveis: (req, res) => {
            return res.json(languages);
        }
    }
}