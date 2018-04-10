/* TD04 - Leet

Le but de cet exercice est de faire un traducteur leet speak.

t => 7
i => 1
s => 5
e => 3
g => 6
o => 0
b => 8
a => 4

*/

/* TD Part */
function leet(input) {
    var leetDictionnay = { "t": 7, "i": 1, "s": 5, "e": 3, "g": 6, "o": 0, "b": 8, "a": 4 }
    for(x=0; x != input.length; x++) {
        if(leetDictionnay[input[x]] != undefined)
            input[x] = leetDictionnay[input[x]].toString()
        //     console.log(leetDictionnay[input[x]].toString())
        // else
        //     console.log(input[x])
        
    }
    return(input.trim())
}

/* Testing Part */

var str1 = ' this is the 42 string'
var str2 = 'this is the string containing foo bar '

if (leet(str1) === '7h15 15 7h3 42 57r1n6' &&
    leet(str2) === '7h15 15 7h3 57r1n6 c0n741n1n6 f00 84r') {
    console.log('TD04 :: Success')
} else {
    console.log('TD04 :: Failed')
}
