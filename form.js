// console.log(window)
// alert("Enter your details")
// window.alert("Enter your details") //also works


// single element
console.log(document.getElementById("my_form"))
console.log(document.querySelector(".container"))

// multiple element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

var items = console.log(document.getElementById('item'))
items.forEach(item=>console.log(item));