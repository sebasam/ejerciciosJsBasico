/**Variables que envuelven los elementos del html, las imagenes de las pizzas están escondidas con la clase de bootstrap
 * d-none, el programa depende a las opciones del usuario, hará aparecer las imágenes
 */
let pizzaPersonal = document.getElementById('pizza-personal')
let pizzaPolloChampiñones = document.getElementById('pizza-pollo-champiñones')
let pizzaHawaiana = document.getElementById('pizza-hawaiana')
let pizzaCarnes = document.getElementById('pizza-carnes')
let pizzaMediana = document.getElementById('pizza-mediana')
let pizzaMexicana = document.getElementById('pizza-mexicana')
let pizzaCriolla = document.getElementById('pizza-criolla')
let pizzaFamiliar = document.getElementById('pizza-familiar')
let pizzaVegetariana = document.getElementById('pizza-vegetariana')
let pizzaCarnePollo = document.getElementById('pizza-carne-pollo')
//Mensajes de bienvenida guardados en variables
let welcome = alert('Hola, bienvenido a tu pizzeríaXD, El BOT te atenderá')
let myOrder = prompt('Soy Sebas El BOT, Qué tipo de pizza desea, digite por favor el número de la opción, 1 - PizzaPersonal 2 - Pizza Mediana  3 - Pizza familiar')
//Variables con los mensajes que mostrarán en pantalla dependiendo las opciones del usuario
const messagePolloYChampiñones = 'Por favor seleccone el número de la opción, 1 - con queso 2 - sin queso'
const messagePolloYChampiñones2 = 'Por favor seleccone el número de la opción, 1 - con salsa 2 - con borde de bocadillo'
const messagePizzaHawaiana = 'Por favor seleccone el número de la opción, 1 - con queso 2 - sin queso'
const messagePizzaHawaiana2 ='Por favor seleccone el número de la opción, 1 - con salami - sin salami'

const messagePizzaCarnes = 'Por favor seleccone el número de la opción, 1 - con salami 2 - con cabano '
const messagePizzaCarnes2 = 'Por favor seleccone el número de la opción, 1 - con queso 2 - con queso'

const messagePizzaMexicana = 'Por favor seleccone el número de la opción, 1 - con nachos 2 - sin nachos'
const messagePizzaMexicana2 = 'Por favor seleccone el número de la opción, 1 - guacamole extra 2 - sin guacamole extra'

const messagePizzaCriolla = 'Por favor seleccone el número de la opción, 1 - con maiz 2 - sin maiz '
const messagePizzaCriolla2 = 'Por favor seleccone el número de la opción, 1 - extra carne molida 2 - con queso'

const messagePizzaVegetariana = 'Por favor seleccone el número de la opción, 1 - con queso 2 - sin queso'
const messagePizzaVegetariana2 = 'Por favor seleccone el número de la opción, 1 - verdura extra 2 - sin verdura extra'

const messagePizzaCarnePollo = 'Por favor seleccone el número de la opción, 1 - con queso 2 - sin queso'
const messagePizzaCarnePollo2 = 'Por favor seleccone el número de la opción, 1 - con salchicha 2 - con champiñones'

const addition = 'desea Algún adicional? digite si ó no'
//función reutilizable, se le pasará dos pizzas para el caso de la seccion pizza personal, dejará visible la pizza que se escoja
const selectPizzaPersonal = (pizza, pizza2) => {    
        pizza.classList.add('d-none')
        pizza2.classList.add('d-none')
}
//misma funciín que la de arriba pero adaptada para que funcione en pizza mediana y pizza familiar
const selectPizza = (pizza) => {    
    pizza.classList.add('d-none')
}
// funcion que recibe dos argumentos, un texto con el nombre d ela pizza y un texto para pedir algún adicional, en caso de que el usuario diga no, ejecutará un buvle infinito para acabar el programa
const pizzaSelect = (text, aditional) => {
    alert(`Seleccionaste la pizza ${text}`)
    let add = prompt(`${aditional}`)
    if(add === 'si'){
        alert('Por favor va a seleccionar los adicionales')
    }else if(add === 'no'){
        while(1 == 1){            
         alert(`Gracias! Su pedido de ${text}, será enviado a la dirección registrada`)
        }
    }
}
//Función que pedirá al usuario los adicionales y finalizará el programa
const ingredients = (message, message2, kindPizza) => {
    let one = prompt(`${message}`)
    if(parseInt(one) === 1){
        let two = prompt(`${message2}`)
        switch (parseInt(two)) {
            case 1:
                alert(`Muchas gracias! su pedido de ${kindPizza} será enviado a la direción registrada inmediatamente`)
                break;
            case 2:
                alert(`Muchas gracias! su pedido de ${kindPizza} será enviado a la direción registrada inmediatamente`)
                break;
        }
    }else if(parseInt(one) === 2){
        let two = prompt(`${message2}`)
        switch (parseInt(two)) {
            case 1:
                alert(`Muchas gracias! su pedido de ${kindPizza} será enviado a la direción registrada inmediatamente`)
                break;
            case 2:
                alert(`Muchas gracias! su pedido de ${kindPizza} será enviado a la direción registrada inmediatamente`)
                break;
        }
    }else{
        alert('Por favor ingresa una opción válida')
    }
}
//Función principal y la única que se ejecuta fuera del bloque de eventos, saludará al usuario y mostrará de inicio la sección de pizza que el usuario escoja e iniciará el programa como tal
const makeOrder = () => {
    welcome
    myOrder
    if(parseInt(myOrder) === 1){
        pizzaPersonal.classList.remove('d-none')
        alert('Escoge con click una opción')
    }else if(parseInt(myOrder) === 2){
        pizzaMediana.classList.remove('d-none')
        alert('Escoge con click una opción')
    }else if(parseInt(myOrder) === 3){
        pizzaFamiliar.classList.remove('d-none')
        alert('Escoge con click una opción')

    }else{
        alert('Por favor ingrese una opción válida, 1 2 o 3')
    }
}
makeOrder()
//seccion de eventos y se ejecutará al hacer click a cada imagen de las pizzas
pizzaPolloChampiñones.onclick = function(){
    selectPizzaPersonal(pizzaHawaiana, pizzaCarnes)
    pizzaSelect('Pizza de Pollo con Champiñones', addition)    
    ingredients(messagePolloYChampiñones, messagePolloYChampiñones2, 'Pizza de Pollo con Champiñones')
}
pizzaHawaiana.onclick = function(){
    selectPizzaPersonal(pizzaPolloChampiñones, pizzaCarnes)
    pizzaSelect('Pizza Hawaiana', addition)
    ingredients(messagePizzaHawaiana, messagePizzaHawaiana2, 'Pizza Hawaiana')
}
pizzaCarnes.onclick = function(){ 
    selectPizzaPersonal(pizzaHawaiana, pizzaPolloChampiñones)
    pizzaSelect('Pizza de carnes', addition)    
    ingredients(messagePizzaCarnes, messagePizzaCarnes2, 'Pizza de carnes')
}
pizzaMexicana.onclick = function(){
    selectPizza(pizzaCriolla)
    pizzaSelect('Pizza Mexicana', addition)
    ingredients(messagePizzaMexicana, messagePizzaMexicana2, 'Pizza Mexicana')
}
pizzaCriolla.onclick = function(){
    selectPizza(pizzaMexicana)
    pizzaSelect('Pizza Criolla', addition)
    ingredients(messagePizzaCriolla, messagePizzaCriolla2, 'Pizza Criolla')
}
pizzaVegetariana.onclick = function(){
    selectPizza(pizzaCarnePollo)
    pizzaSelect('Pizza Vegetariana', addition)
    ingredients(messagePizzaVegetariana, messagePizzaVegetariana2, 'Pizza Vegetariana')
}
pizzaCarnePollo.onclick = function(){
    selectPizza(pizzaVegetariana)
    pizzaSelect('Pizza de Carne y Pollo', addition)
    ingredients(messagePizzaCarnePollo, messagePizzaCarnePollo2, 'Pizza de carne y pollo')
}