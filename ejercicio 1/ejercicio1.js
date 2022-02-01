// Programa que recibe dos parámetros, un nombre de trabajador y un salario con el fin de mostrarlos en la consola
// Verifica si los tipos de dato corresponden a la info solicitada, de ser así imprime en la consola
const personalData = (worker, salary) => {    
    if(typeof(worker) === 'string'){
        if(typeof(salary) === 'number'){
            alert(`El nombre del trabajador es: ${worker}`)
            alert(`El salario básico del trabajador es de: $${salary} COP`)
        }else{
            alert('El salario del trabajador debe ser un número')
        }
    }else{
        alert('El nombre del trabajador debe ser una cadena de texto')
    }
}
personalData('sebas', 1000)
personalData('Sylvana', 10000)
//personalData('Javier', false) prueba tyof numero falso