/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et 
ne retournant que les nombres de ce tableau faisant partie 
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */
//!\\ À refaire, dégueulasse
const fib = (fibNum, n=100, n1=1, n2=0) => {
    var tmp = new Number()
    for(x=0; x<n; x++) {
        tmp = n2 + n1
        n2 = n1
        n1 = tmp
        if(tmp == fibNum)
            return(true)
    }
    return(false)
}
const fibFilter = (array) => {
    resultArray = new Array()
    array.forEach(element => {
        if(fib(element) == true || element == 0)
            resultArray.push(element)
    });
    return(resultArray)
}

/* Testing Part */
const array = [0,1,4,5,13,2,3,4,20,30,11,8,12]
console.log(fibFilter(array).toString() == [0, 1, 5, 13, 2, 3, 8].toString() ? 'TD01 :: Success' : 'TD01 :: Failed')