const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "vari myVar = 10;",
        "let myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 1 // A resposta correta é a opção B (let myVar = 10;)
    },
    {
      pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "push()",
        "shift()",
      ],
      correta: 0 // A resposta correta é a opção A (pop())
    },
    {
      pergunta: "Qual é a saída do código 'console.log(1 + '2' + 3)'?",
      respostas: [
        "123",
        "6",
        "15",
      ],
      correta: 0 // A resposta correta é a opção A (123)
    },
    {
      pergunta: "O que o método 'map()' faz em um array JavaScript?",
      respostas: [
        "Altera o tamanho do array",
        "Itera sobre cada elemento do array e retorna um novo array",
        "Adiciona um novo elemento no final do array",
      ],
      correta: 1 // A resposta correta é a opção B (Itera sobre cada elemento do array e retorna um novo array)
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita (igualdade em valor e tipo)",
        "Comparação solta (igualdade em valor apenas)",
      ],
      correta: 1 // A resposta correta é a opção B (Comparação estrita - igualdade em valor e tipo)
    },
    {
      pergunta: "Qual é o resultado da expressão 'typeof([])'?",
      respostas: [
        "Array",
        "Object",
        "Function",
      ],
      correta: 1 // A resposta correta é a opção B (Object)
    },
    {
      pergunta: "Como você converte uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "stringToNumber()",
      ],
      correta: 0 // A resposta correta é a opção A (parseInt())
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0 // A resposta correta é a opção A (// Este é um comentário)
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "shift()",
        "pop()",
        "slice()",
      ],
      correta: 1 // A resposta correta é a opção B (pop())
    },
    {
      pergunta: "Qual é a forma correta de se declarar uma função em JavaScript?",
      respostas: [
        "função myFunction() {}",
        "var myFunction = function() {}",
        "function myFunction() {}",
      ],
      correta: 2 // A resposta correta é a opção C (function myFunction() {})
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
  
  