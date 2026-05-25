/*Enunciado:
A API REST fornecida contém informação sobre jogos de futebol entre 2011 e 2015.
Dado um year (ano) e um inteiro k, implementa getCLChampionTeams(year, k) que retorna um array de strings com os nomes das equipas
que jogaram pelo menos k jogos na UEFA Champions League nesse ano, ordenado alfabeticamente.
A API tem paginação: cada chamada devolve uma página de resultados. Para obter todos os dados precisas de fazer várias chamadas.
https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<year>&page=<pageNumber>
reposta com formato:
{
  page: 1,
  per_page: 10,
  total: 50,
  total_pages: 5,
  data: [
    { team1: "Barcelona", team2: "Real Madrid", year: "2015", competition: "UEFA Champions League", ... },
  ]
}
*/

async function getCLChampionTeams(year, k) { //fazer pedidos À internet e esperar pela resposta
  const base = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}`;

// tenho de saber quantas páginas existem, para saber quantas chamadas vou fazer
  const firstRes = await fetch(`${base}&page=1`); // API exige que digas qual página, para saber toal_pages pode ser qualquer uma
  const firstData = await firstRes.json(); // converte a resposta (formato JSON) para um objeto js através do .json()
  const totalPages = firstData.total_pages;

  // buscar todas as páginas em paralelo de acordo com totalPages que descbri anteriormente
  const pagePromises = []; // todas as respostas são guardadas neste array

  for (let i = 1; i <= totalPages; i++) { // faz um fetch para cada pagina
    pagePromises.push(
      fetch(`${base}&page=${i}`).then(res => res.json())
    );
  }
  const allPages = await Promise.all(pagePromises); // lanças os pedidos ao mesmo tempo, não preciso que um termine para começar outro
  // allPages é um array de objectos, um por cada página

  // só quero os jogos de todas as páginas num único array
  const allMatches = allPages.flatMap(page => page.data); // flatMap fica tudo num único array [jogo1, jogo2, jogo3, jogo4, jogo5]
  /* se usasse  apenas o map:
  allPages.map(page => page.data)
[ [jogo1, jogo2], [jogo3, jogo4], [jogo5] ] -> array dentro de array */

  const counts = {};   // objeto vazio para contar os jogos por equipa
  allMatches.forEach(match => { // escolhi match em vez de jogo para ficar em ingles, forEach vai a cada match do array um a um
    counts[match.team1] = (counts[match.team1] || 0) + 1; // se a equipa jogar pela primeira vez, em vez de undifiened, ele começa em 0
    counts[match.team2] = (counts[match.team2] || 0) + 1; 
    // O js não consegue saber qual a team1/team2 que eu quero naquele determinado jogo
    // O match é como um ponteiro que identifica o jogo que estou a especificar neste momento
  });

  return Object.keys(counts)  // filtra por k e ordena por ordem alfabética
    .filter(team => counts[team] >= k)
    .sort();
}

// Teste:
getCLChampionTeams(2011, 12).then(console.log);

