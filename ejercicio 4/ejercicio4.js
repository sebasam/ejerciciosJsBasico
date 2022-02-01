const pilarViento = document.getElementById('pilar-del-viento')
const animationPilar = (elem) => {
    elem.style.height = '500px'
    elem.style.opacity = '0.5'
    elem.style.borderRadius = '100px'
    elem.style.backgroundColor = 'green'
}
const animationPilar2 = (elem) => {
    elem.style.height = '700px'
    elem.style.opacity = '1'
    elem.style.backgroundColor = 'rgba(3, 252, 86, 0.5)'
}
pilarViento.onmouseover = function(){
    animationPilar(pilarViento)
}
pilarViento.onmouseleave = function(){
    animationPilar2(pilarViento)
}