const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

async function fetchData() {
  try {
    const { data } = await axios.get(process.env.SCRAP_URL);
    const $ = cheerio.load(data);

    // Exemplo: Extrair o título de artigos de um blog
    const articles = [];
    $('article h2').each((index, element) => {
      const title = $(element).text();
      articles.push(title);
    });

    return articles;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
}

module.exports = { fetchData };
