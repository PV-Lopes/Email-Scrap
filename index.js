const { fetchData } = require('./scraper');
const { sendEmail } = require('./email');

async function main() {
  const articles = await fetchData();
  if (articles) {
    const emailText = `Aqui estão os artigos encontrados:\n\n${articles.join('\n')}`;
    await sendEmail('Lista de Artigos', emailText);
  } else {
    console.log('Nenhum dado encontrado para enviar por e-mail.');
  }
}

main();
