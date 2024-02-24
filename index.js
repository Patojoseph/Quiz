const perguntas = [
  {
    pergunta: "Qual é o jogo eletrônico mais vendido de todos os tempos?",
    respostas: [
      "Minecraft",
      "Tetris",
      "Grand Theft Auto V",
    ],
    correta: 1 // A resposta correta é a opção B (Tetris)
  },
  {
    pergunta: "Em qual jogo os jogadores controlam personagens chamados 'Sims' e simulam a vida cotidiana?",
    respostas: [
      "Minecraft",
      "The Sims",
      "Grand Theft Auto V",
    ],
    correta: 1 // A resposta correta é a opção B (The Sims)
  },
  {
    pergunta: "Qual é o nome do famoso mascote da Nintendo, que é um encanador e estrela de vários jogos?",
    respostas: [
      "Sonic",
      "Pikachu",
      "Mario",
    ],
    correta: 2 // A resposta correta é a opção C (Mario)
  },
  {
    pergunta: "Qual é o jogo que popularizou o gênero 'Battle Royale'?",
    respostas: [
      "Fortnite",
      "PUBG (PlayerUnknown's Battlegrounds)",
      "Apex Legends",
    ],
    correta: 1 // A resposta correta é a opção B (PUBG)
  },
  {
    pergunta: "Qual é o nome do protagonista da série de jogos 'The Legend of Zelda'?",
    respostas: [
      "Ganondorf",
      "Link",
      "Zelda",
    ],
    correta: 1 // A resposta correta é a opção B (Link)
  },
  {
    pergunta: "Qual jogo foi lançado em 1996 e é frequentemente citado como um dos melhores de todos os tempos?",
    respostas: [
      "Final Fantasy VII",
      "Super Mario 64",
      "The Legend of Zelda: Ocarina of Time",
    ],
    correta: 2 // A resposta correta é a opção C (The Legend of Zelda: Ocarina of Time)
  },
  {
    pergunta: "Qual é o nome do protagonista da série de jogos 'God of War'?",
    respostas: [
      "Kratos",
      "Ares",
      "Zeus",
    ],
    correta: 0 // A resposta correta é a opção A (Kratos)
  },
  {
    pergunta: "Qual jogo popular de sobrevivência coloca os jogadores em uma ilha cheia de dinossauros?",
    respostas: [
      "ARK: Survival Evolved",
      "Rust",
      "Subnautica",
    ],
    correta: 0 // A resposta correta é a opção A (ARK: Survival Evolved)
  },
  {
    pergunta: "Em qual jogo os jogadores controlam um personagem chamado 'Geralt de Rivia' em busca de sua filha adotiva?",
    respostas: [
      "The Witcher 3: Wild Hunt",
      "Dark Souls",
      "Assassin's Creed Odyssey",
    ],
    correta: 0 // A resposta correta é a opção A (The Witcher 3: Wild Hunt)
  },
  {
    pergunta: "Qual é o nome do protagonista da série de jogos 'Assassin's Creed'?",
    respostas: [
      "Ezio Auditore",
      "Connor Kenway",
      "Altair Ibn-La'Ahad",
    ],
    correta: 0 // A resposta correta é a opção A (Ezio Auditore)
  },
];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  
  //loop ou repetição
  for(const item of perguntas) {
    const quizItem= template.content.cloneNode(true)
  
    //altera o conteudo h3 de acordo com oq estava escrito no perguntas
    quizItem.querySelector("h3").textContent = item.pergunta
  
    for(let respostas of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
  
      //clonou o span, contudo o input junto 
      dt.querySelector("span").textContent = respostas
  
      //com isso revolvemos o problema que os inputs eram iguias a todos, mas agr eles estão tendo o mesmo valor.
      dt.querySelector("input").setAttribute("name", "perguntas" + perguntas.indexOf(item))
  
      //agora conseguimos revolver o problma em que todos os inputs estavam com o meus valor, agr cada um tem seu valor diferente que é puxado das repostas.
      dt.querySelector("input").value = item.respostas.indexOf(respostas)
  
      //Esse comando vai fazer o computador entender quando o input for selecionado, assim seno verdadeira ou falsa, contudo esse tipo de comparação com os dois iguais ele nao identifica os tiposde valores, já tem outros tipos que você consegue fazer.
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      } 
      quizItem.querySelector("dl").appendChild(dt)
    }
  
    quizItem.querySelector("dl dt").remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  