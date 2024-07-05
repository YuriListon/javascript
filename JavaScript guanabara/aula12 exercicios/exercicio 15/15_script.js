function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('ERRO, verifique seus dados')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
        gênero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'menino-bebe.png.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'homem-jovem.png.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'homem-adulto.png.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'homem-idoso.png.jpg')
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'menina-bebe.png.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovem-adulta.png.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'mulher-adulta.png.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'mulher-idosa.png.jpg')
        }
    }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}