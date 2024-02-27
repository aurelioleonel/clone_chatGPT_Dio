/**
 * Importa a aplicação.
 */
const app = require('./app');

/**
 * Define a porta do servidor.
 */
const port = process.env.PORT || 3000;

/**
 * Inicia o servidor.
 */
app.listen(port, () => {
  /**
   * Exibe no console que o servidor está rodando.
   */
  console.log(`Servidor rodando na porta ${port}.`);
});

