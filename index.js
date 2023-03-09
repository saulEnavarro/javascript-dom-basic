const h1=document.querySelector('#titulo')
const input1=document.querySelector('#calculo1')
const input2=document.querySelector('#calculo2')
const btn=document.querySelector('#btncalcular')
const result=document.querySelector('#result')

const form=document.querySelector('#formulario')
//Al selector le mandamos a usar el AddEvent listener
//se le pasa 1 la acción y 2 la función


//btn.addEventListener('click',btnOnclick)
form.addEventListener('submit',btnOnclick)


function btnOnclick(event){
    console.log({event})
    event.preventDefault();
    let resultado=input1.value+input2.value
    result.innerHTML='Resultado: '+resultado;
}

/* h1.innerText='Tiwrando html'

console.log({h1,p,parrafito,pid,input})
console.log(parrafito.getAttribute('class'))
parrafito.setAttribute('class','rojo')
parrafito.classList.add('colowers')
parrafito.classList.remove('verde')
//Enviar por el input el valor
input.value='La tanda dala'
document.createElement('span')
const img = document.createElement('img')
img.setAttribute('src','https://www.logodesign.net/images/home-page-logo-03.png');
console.log(img)
//Suple el contenido
pid.innerHTML=''
//Inserta pero no borra contenido AA
pid.append(img) */