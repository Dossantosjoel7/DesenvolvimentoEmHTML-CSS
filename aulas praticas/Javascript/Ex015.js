let soma = function (n1=0, n2=0) {
    return n1+n2;
}

function fatorial(n){
    if(n == 1){
        return n;
    } else{
        return n * fatorial(n-1);
    }
}

let fav = fatorial(5);
console.log(fav);