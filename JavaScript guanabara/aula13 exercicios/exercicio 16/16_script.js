function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[Erro] faltam dados')
        res.innerHTML = 'Impossivel Contar!'
    } else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = 1; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F631}`
            }
            res.innerHTML += `\u{1F47B}	`
        	
        } else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F631}`
            }
        }
        res.innerHTML += `\u{1F47B}`
    }

}