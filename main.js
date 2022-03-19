// Condicional para 


// Condicional por tecla
const numeroTeclado = () =>{
if(teclas === document.querySelector('#num1')){
    // quadrados.innerText = 1;
    console.log(1)
    } else if(teclas === document.querySelector('#num2')){
    // quadrados.innerText = 2;
    console.log(2)
    }
}

// Aguardar o usuário clicar em alguma tecla.
let teclas
const localTecla = document.querySelectorAll("button")

localTecla.forEach((tecla) => {
    tecla.addEventListener('click', () => {
        teclas = tecla;    
        numeroTeclado();
    }) 
})

let quadrados
const localQuadrado = document.querySelectorAll(".numero")
// Confere quais quadrados estão disponíveis para números

