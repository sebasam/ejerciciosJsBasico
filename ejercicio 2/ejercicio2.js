// el usuario debera ingresar un valor como casa, mesa, perro ,gato y este devolverá la palabra en inglés
const dataIntro = prompt('Por favor ingrese alguna de las siguientes palabras: casa mesa perro gato')
if(dataIntro === 'casa' || dataIntro === 'mesa' || dataIntro === 'perro' ||dataIntro === 'gato'){
    switch (dataIntro) {
        case 'casa':
            alert(`${dataIntro} en inglés es house`)
            break;
        case 'mesa':
            alert(`${dataIntro} en inglés es table`)
            break;
        case 'perro':
            alert(`${dataIntro} en inglés es dog`)
            break;
        case 'gato':
        alert(`${dataIntro} en inglés es cat`)
            break;
    }
}else{
    alert('Por favor ingrese un valor válido, recuerde que el programa es sensible a myúsculas y minúsculas')
}