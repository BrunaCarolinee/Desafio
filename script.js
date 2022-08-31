const paragrafo = document.querySelector('.Pmaior');
console.log(paragrafo)

function escrever(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 85 * i)
  })
}

escrever(paragrafo)