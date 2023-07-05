function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#resposta')
    if ( fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem/menino-certo.png')
            } else if(idade <= 21 ){
                img.setAttribute('src', 'imagem/adolescente-M-certo.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagem/homem-certo.png')
            }else if(idade > 50){
                img.setAttribute('src', 'imagem/velho-certo.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem/menina-certo.png')
            } else if(idade <= 21 ){
                img.setAttribute('src', 'imagem/adolescente-F-certo.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagem/mulher-certo.png')
            }else if(idade > 50){
                img.setAttribute('src', 'imagem/velha-certo.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}