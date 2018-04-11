/* TD08 Robbie 

Dans cet exercice, vous devez créer un petit robot.

Celui-ci prend en paramètre une instruction (représentée par un nombre), et potentiellement un 
ou plusieurs paramètres à la suite de celle-ci.

Voici la liste des instructions que votre robot doit être capable d'executer : 

Format : 

Numéro de l'instruction [paramètre1, paramètre2] // Description de l'instruction

Instructions :

1 [prénom]                  // Retourner 'Bonjour {prénom}!'
2                           // Retourner la date au format UTC
3 [texte]                   // Remplacer les 't' par des '1' dans {texte}
4 [texte]                   // Remplacer tous les mots par '####' dans {texte}
5 [texte, mot, alt]         // Remplacer {mot} par {alt} dans {texte}
6 [texte]                   // Remplacer la chaine 'date' par la date au format UTC dans {texte}

Exemple :

var robbie = Robbie()
robbie.do(1, 'Jérémie') // Retourne 'Bonjour Jérémie!'

*/

function Robbie () {
    this.do = function(num, ...string) {
        var data = ""
        switch(num) {
            case 1:
                data = "Bonjour " + string[0] + "!"
                break;
            case 2:
                data = new Date().toUTCString()
                break;
            case 3:
                data = string[0].replace(/t/g, "1")
                break;
            case 4:
                data = string[0].replace(/[a-zA-Z]/g, "#")
                break;
            case 5:
                data = string[0].replace(string[1], string[2])
                break;
            case 6:
                data = true
                break;
        }
        console.log(data)
        return(data)
    }
}

/* TD Part */

/* Testing Part */

function test() {
    var robbie = new Robbie()
    var text = 'Je suis un test'
    if (robbie.do(1, 'Jérémie') !== 'Bonjour Jérémie!') {
        console.log(1)
        return false
    } else if (!robbie.do(2)) {
        console.log(2)
        return false
    } else if (robbie.do(3, text) !== 'Je suis un 1es1') {
        console.log(3)
        return false
    } else if (robbie.do(4, text) !== '#### #### #### ####' && robbie.do(4, text) !== '## #### ## ####') {
        console.log(4)
        return false
    } else if (robbie.do(5, text, 'test', 'toast') !== 'Je suis un toast') {
        console.log(5)
        return false
    } else if (!robbie.do(6, text)) {
        return false
    }
    return true
}

console.log(test() === true ? 'TD08 :: Success' : 'TD08 :: Failed')
