/* JS Document */

window

/* BOM (Browser Object Model) */
//alert()
//confirm()
//prompt()
//open()

/* DOM (Document Object Model) */
//document

/* 

getElementById(id)
getElementsByClassName(class)
getElementsByTagName(tag)

querySelector(selector)
querySelectorAll(selector)

createElement(tag)
createTextNode(texto)

*/
let titulo = document.getElementById('titulo')
let listas = document.getElementsByClassName('lista')
let divs = document.getElementsByTagName('div')

let texto = document.createTextNode('Texto desde Javascript')
titulo.appendChild(texto)
titulo.classList.add('blue_title')

let title = document.querySelector('#titulo')
let lists = document.querySelectorAll('.lista')

let links = document.querySelectorAll('#home .link')

links.forEach((link) => {
    link.style.color = '#cccccc'
})

let saludar = document.getElementById('saludar')
saludar.addEventListener('click', function(){
    alert('Saludos desde Javascript')
})

let input = document.querySelector('#email')
let btnSuscribir = document.querySelector('#btnSuscribir')

input.addEventListener('keyup', (evento) => {
    console.log(evento.key)
    if(evento.target.value !== ''){
        btnSuscribir.removeAttribute('disabled')
    } else {
        btnSuscribir.setAttribute('disabled', true)
    }
})

btnSuscribir.addEventListener('click', (evento) => {
    console.log(evento.type)

    evento.target.textContent = 'Por favor espere...'
    evento.target.setAttribute('disabled', true)


    setTimeout(() => {
        evento.target.textContent = 'Suscribir'
        input.value = ''
        alert('Gracias por suscribir')
    }, 3000)

})

let box = document.querySelector('.box')
box.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'brown'
})
box.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'blueviolet'
})

box.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'cadetblue'
})