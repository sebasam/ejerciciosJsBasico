let num1 = 5
let num2 = 8

if(num1 < num2){
    console.log(`${num1} no es mayor que ${num2}`)
}
if(num2 > 0){
    console.log(`${num2} es positivo`)
}
if(num1 != 0){
    console.log(`${num1} es negativo o diferente de cero`)
}
if(num1 < num2){
    while(num1 <= 6){
        num1++
    }
    console.log(`Incrementar en una unidad el número 1, no lo hace mayor o igual al ${num2}, el número 1 ahora vale ${num1}`)
}