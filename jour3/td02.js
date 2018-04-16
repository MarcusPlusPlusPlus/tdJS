/* TD02 - Stockage2

Vous devez faire un système basique de stockage d'information nommé Storage.

Celui-ci doit permettre d'ajouter des éléments avec une méthode put, prenant en paramètre une clé, et une valeur.

Attention : la clé ET la valeur peuvent être tout type de primitive JavaScript !

Il doit également être possible de récupérer un élément dans votre Storage avec la méthode fetch,
celle-ci retournera la valeur correspondant à la clé (unique) passée en paramètre.

Enfin, il doit comporter un attribut length, retournant le nombre d'éléments contenus dans votre storage.

*/

let Storage = () => {
    obj = {
        "storage": new Map(),
        get length() { return(this.storage.size) }
    }
    obj["put"] = (key, value) => { obj["storage"].set(key, value) }
    obj["fetch"] = key => obj["storage"].get(key)
    return(obj)
}
/* Testing Part */
var storage = Storage()
function test() {
    storage.put('test', 42)
    storage.put(42, 'test')
    storage.put(12.01, 'ok')    
    if (storage.length !== 3) {
        return false
    } else if (storage.fetch(42) !== 'test') {
        return false
    } else if (storage.fetch(12.01) !== 'ok') {
        return false
    }
    return true
}

console.log(test() === true ? 'TD02 :: Success' : 'TD02 :: Failed')
