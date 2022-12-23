// cazamos el fomrulario y escuchamos su evento submit
// cazamos la caja de la lista de libros

import { getValueAndCheckEmpty } from './helpers/getValuesAndCheckEmpty.js'

const form = document.querySelector('.main-form')
const bookList = document.querySelector('.book-list')


const onAddBook = (event) => { 
  // prevenimos comportamiento por defecto
  event.preventDefault()
  // cogemos los valores y ponemos rojo si está mal
    // revisamos que no esten vacíos (ojo, que ya tenemos una función que hace eso!!)
  const title = getValueAndCheckEmpty(form.bookTitle)
  const author = getValueAndCheckEmpty(form.bookAuthor)
  const isRidden = form.isRidden.checked
  

  if (title === 'está vacío' || author === 'está vacío') {
    return
  }

  // cuando ya todo está bien, creamos un article en memoria, le añadimos toda la info exactamente igual como lo hemos hecho en el HTML
  const bookHTML = document.createElement('article')
  bookHTML.className = 'book'

  const eyeIcon = isRidden === true ? 'bi-eye': 'bi-eye-slash'


  bookHTML.innerHTML = `
  <span class="book__title">${title}</span> - 
  <span class="book__author">${author}</span>
  <i class="eye-icon bi ${eyeIcon}"></i>
  <i name="papelera" class="delete-icon bi bi-trash"></i>      
  ` 


  // justo aquí, ya disponemos del botón de borrar como objeto del DOM, así que ya le podemos dar un addEventListener para decirle lo que tiene que hacer
  // const deleteButton = bookHTML.querySelector('.delete-icon')
  // deleteButton.onclick = () => { bookHTML.remove() }
  
  
  // después de crearlo, lo metemos en el DOM, justo al final de la lista de libros
  bookList.append(bookHTML)
 
}

form.onsubmit = (event) => onAddBook(event)


//* EXTRA --> EVENT DELEGATION
// para evitar crear un event listener por cada elemento, podemos hacerlo de otra forma

// 1.- Cazamos el elemento padre que contenga todos los elementos que queramos escuchar --> en este caso sería bookList el más cercano

// 2.- Escuchamos el evento click en esta caja padre y usamos el objeto event

// 3.- Preguntamos si aquello a lo que hemos hecho click es "precisamente" lo que nos interesa, podemos preguntar por ejemplo por su clase o su id o su name

// 4.- Una vez dentro del if, ya sabemos que hemos hecho click, en este caso, en una papelera
// 5.- Ahora solo hace falta decirle a esa papelera (event.target) que borre a su padre, que es el article del book


bookList.onclick = (event) => {
  
  if (event.target.classList.contains('delete-icon')) {

    const youSure = confirm('¿Estás segur@?')

    if (youSure) event.target.parentElement.remove()   

  }

}
