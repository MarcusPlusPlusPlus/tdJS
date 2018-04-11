function factorielle(i) {
    var factorial = 1
    if(i === 0){
        return(factorial)
    }
    else {
        for(x=0; x!= i; x++)
            factorial *= (x+1)
        return(factorial)
    }

}
module.exports = (factorielle)
