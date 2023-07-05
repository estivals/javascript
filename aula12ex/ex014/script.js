function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var fundo = window.document.getElementById('funda')
var txt = window.document.getElementById('txt')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 5 && hora < 12 ){
    img.src = 'imagens/manha.png'
    fundo.style.background = '#d0bdb5'
    txt.innerText = 'Bom Dia!'
} else if(hora >= 12 && hora < 18 ){
    img.src = 'imagens/tarde.png'
    fundo.style.background = '#a2cce8'
    txt.innerText = 'Boa Tarde!'
} else {
    img.src = 'imagens/noite.png'
    fundo.style.background = '#051320'
    txt.innerText = 'Boa Noite!'
}
}