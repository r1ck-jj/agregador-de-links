/*Função que se ativará ao clicar no botão*/
function toggleMode() {
  const html = document.documentElement

  /*Condicional se*/
  /*Ele pergunta pro html, tem light, se sim, tira, se não coloque, fazendo com que mude do light pro dark*/
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
 
    /*Faz a mesma coisa que a função de cima, só que automatico*/
    html.classList.toggle('light')
}
