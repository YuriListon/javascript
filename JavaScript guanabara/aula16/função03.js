//recursividade
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))



//5! = 5 x 4 x 3 x 2 x 1 || 5! = 5 x 4!

/*function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(7))*/


/*let v = function(x) {
    return x*7
}
console.log(v(4))*/