let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, lista) {
    if (lista.indexOf(Number(n)) !== -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
       } else {
        window.alert('Valor invalido ou já adicionado!')
    }
    num.value = ''
    num.focus()
}
 
function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML +=`<p>O menor valor foi ${menor}.<p>`
        res.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média é igual a ${media}.</p>`
    }
 }