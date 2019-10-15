console.log("Alpaca bag!");

/* 
Not only can functions take other functions as arguments, but functions can also 
return functions! This is marked as an advanced challenge because 
you haven't been introduced to this concept yet.

The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.
 */
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }

    return namer();
}

nameMaker = llamaNamer()
console.log(nameMaker);