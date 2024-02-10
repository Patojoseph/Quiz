const perguntas = [
    {
        pergunta: "Qual é o nome completo do ator Adam Driver?",
        respostas: [
          "Adam Paul Driver",
          "Adam Douglas Driver",
          "Adam Robert Driver",
        ],
        correta: 1 // A resposta correta é a opção B (Adam Douglas Driver)
      },
      {
        pergunta: "Em qual filme Adam Driver interpretou o personagem Kylo Ren?",
        respostas: [
          "Star Wars: O Despertar da Força",
          "Star Wars: O Último Jedi",
          "Star Wars: A Ascensão Skywalker",
        ],
        correta: 0 // A resposta correta é a opção A (Star Wars: O Despertar da Força)
      },
      {
        pergunta: "Qual filme rendeu a Adam Driver sua primeira indicação ao Oscar de Melhor Ator?",
        respostas: [
          "Infiltrado na Klan",
          "História de um Casamento",
          "Paterson",
        ],
        correta: 1 // A resposta correta é a opção B (História de um Casamento)
      },
      {
        pergunta: "Qual é a altura aproximada de Adam Driver?",
        respostas: [
          "1,85 metros",
          "1,90 metros",
          "1,95 metros",
        ],
        correta: 0 // A resposta correta é a opção A (1,85 metros)
      },
      {
        pergunta: "Em qual ramo Adam Driver trabalhava antes de se tornar ator?",
        respostas: [
          "Militar",
          "Médico",
          "Advogado",
        ],
        correta: 0 // A resposta correta é a opção A (Militar)
      },
      {
        pergunta: "Qual foi o primeiro papel de destaque de Adam Driver na televisão?",
        respostas: [
          "Girls",
          "Brooklyn Nine-Nine",
          "Breaking Bad",
        ],
        correta: 0 // A resposta correta é a opção A (Girls)
      },
      {
        pergunta: "Qual filme dirigido por Spike Lee apresenta Adam Driver em um papel importante?",
        respostas: [
          "BlacKkKlansman: O Infiltrado",
          "Infiltrado na Klan",
          "Faça a Coisa Certa",
        ],
        correta: 0 // A resposta correta é a opção A (BlacKkKlansman: O Infiltrado)
      },
      {
        pergunta: "Adam Driver foi indicado ao Oscar por qual papel?",
        respostas: [
          "Kylo Ren em Star Wars",
          "Charlie Barber em História de um Casamento",
          "Flip Zimmerman em Infiltrado na Klan",
        ],
        correta: 1 // A resposta correta é a opção B (Charlie Barber em História de um Casamento)
      },
      {
        pergunta: "Qual é a data de nascimento de Adam Driver?",
        respostas: [
          "19 de novembro de 1982",
          "21 de outubro de 1983",
          "15 de setembro de 1984",
        ],
        correta: 0 // A resposta correta é a opção A (19 de novembro de 1982)
      },
      {
        pergunta: "Em qual ramo do serviço militar Adam Driver serviu antes de se tornar ator?",
        respostas: [
          "Marines",
          "Exército",
          "Força Aérea",
        ],
        correta: 0 // A resposta correta é a opção A (Marines)
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
  
  