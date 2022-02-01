const tomioka = document.getElementById('tomioka')
const tomiokaText = document.getElementById('tomioka-text')
const himejima = document.getElementById('himejima')
const himejimaText = document.getElementById('himejima-text')
const inosuke = document.getElementById('inosuke')
const inosukeText = document.getElementById('inosuke-text')
const kokushibou = document.getElementById('kokushibou')
const kokushibouText = document.getElementById('kokushibou-text')
const nezuko = document.getElementById('nezuko')
const nezukoText = document.getElementById('nezuko-text')
const rengoku = document.getElementById('rengoku')
const rengokuText = document.getElementById('rengoku-text')

const hideElement = (image) => {
    image.classList.add('d-none')
}
const showElement = (elem) => {
    elem.classList.remove('d-none')
}
tomioka.onmouseover = function(){
    hideElement(tomioka)
}
himejima.onmouseover = function(){
    hideElement(himejima)
}
inosuke.onmouseover = function(){
    hideElement(inosuke)
}
kokushibou.onmouseover = function(){
    hideElement(kokushibou)
}
rengoku.onmouseover = function(){
    hideElement(rengoku)
}
nezuko.onmouseover = function(){
    hideElement(nezuko)
}
tomiokaText.onclick = function(){
    showElement(tomioka)
}
himejimaText.onclick = function(){
    showElement(himejima)
}
nezukoText.onclick = function(){
    showElement(nezuko)
}
rengokuText.onclick = function(){
    showElement(rengoku)
}
inosukeText.onclick = function(){
    showElement(inosuke)
}
kokushibouText.onclick = function(){
    showElement(kokushibou)
}