function fatorial (n){
    if (n === 0 || n === 1) {
return 1;
    }else {
        return n * fatorial(n - 1);
    }
}


console.log(fatorial(5)); // 120
console.log(fatorial(210)/); // 1