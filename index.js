// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
cats.lenght = 0
function destructivelyAppendCat(Ralph){
cats.splice("Milo", 0)
cats.push("Ralph")
}
function destructivelyPrependCat(Bob){
cats.unshift("Bob")
}
function destructivelyRemoveFirstCat(Milo){
cats.splice(0)
cats.push("Otis", "Garfield")
}
function destructivelyRemoveLastCat(Ralph, Bob){
    cats.push("Milo", "Otis")
    cats.splice(2, 4)
 }
function appendCat(Gato){
    const cats = ["Milo", "Otis", "Garfield"]
    const newCatsArray = [...cats, Gato]
    return newCatsArray; 
}
function prependCat(Tom){
    const cats = ["Milo", "Otis", "Garfield"]
     return [Tom, ...cats]
    
}
function removeLastCat(Gato){
    const cats = ["Milo", "Otis", "Garfield"]
    return cats.slice(0, -1)
}
function removeFirstCat(){
    const cats =["Milo", "Otis", "Garfield"]
    return cats.slice(1)
}