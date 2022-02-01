// variable btnCrateDiv tiene el boton que creará los divs, zoneCreateDiv, contiene el div al que se lñe añadirán los divs
const btnCreateDiv = document.getElementById('btn-crear-div')
const zoneCreateDiv = document.getElementById('zone-create-div')
// funcion createDiv, creará los divs a partir de un nodo y este se añadirá a la zoneCreateDiv a partir de un metodo del DOM llamado createElement, con classList.add añado unas clases de bootstrap y una clase que controlará el tamaño y el color de los nuevos divs
const createDiv = () => {
    const nodeDiv = document.createElement('div')
    nodeDiv.classList.add('new-div', 'col-4', 'm-3')

    zoneCreateDiv.appendChild(nodeDiv)
}
// cuando el boton reciba el evento click se ejecutará la función para poder añadir los divs
// el color cambia de colores cuando el mouse hace hover pero desde css lo coloque, teniendo en cuenta que el dom no me dejo manipular los nuevos divs ya que son inexistentes, por ahora
btnCreateDiv.onclick = function(){
    createDiv()
}