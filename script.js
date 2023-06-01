const letras = "abcdefghijklmnñopqrstuvwxyz";
let intervalo = null;

document.querySelector("h1").onmouseover = event => {  
  let iterador = 0;
  
  clearInterval(intervalo);
  
  intervalo = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letra, indice) => {
        if(indice < iterador) {
          return event.target.dataset.value[indice];
        }
        return letras[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iterador >= event.target.dataset.value.length){ 
      clearInterval(intervalo);
    }
    iterador += 1 / 3;
  }, 20);
}