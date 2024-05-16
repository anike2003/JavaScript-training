//Arrays -- variables that hold multiple values

//using Array constructor

const numbers = new Array(1,2,3,4,5,6)
console.log(numbers)

const fruit=["oranges","mangoes","pawpaw","coconut"]
fruit[4]="Strawberry"
fruit.push("bannana")
fruit.unshift("pneapple")
fruit.pop()
fruit.length
console.log(fruit)
console.log(Array.isArray("apple"))
console.log(fruit.indexOf("pawpaw"))