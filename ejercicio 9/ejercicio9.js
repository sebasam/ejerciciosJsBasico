const age = prompt('Por favor ingresa tu edad, valor máximo aceptado 100')
const girlBig25 = 25000
const girlSmall25 = 20000
const boy = 30000
if(parseInt(age) > 0 && parseInt(age) <= 100){
    if(parseInt(age)  >= 18){
        let gender = prompt('Eres hombre o mujer?')
        if(gender === 'mujer'){
            if(parseInt(age) > 25){
                alert(`Eres ${gender} mayor de 25 años y tu entrada cuesta ${girlBig25} COP`)
            }else{
                alert(`Eres ${gender} menor de 25 años y tu entrada cuesta ${girlSmall25} COP`)
            }
        }else if(gender === 'hombre'){
            alert(`Eres ${gender} y tu entrada cuesta ${boy} COP`)
        }else{
            alert('Debes ingresar hombre o mujer según tu sexo')
        }
    }else{
        alert('Eres menor de edad, NO puedes entrar a la discoteca')
    }
}else{
    alert('Ingresa un número mayor que 0 y menor que 100')
}