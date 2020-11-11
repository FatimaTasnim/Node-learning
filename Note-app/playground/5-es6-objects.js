// object property shorthand

// Old Way
const name = "Tasnim"
const age = "25"

const user = {
    name: name,
    age: age,
    location: "Dhaka"
}

console.log(user)

/// es6 shorthand
const user1 = {
    name,
    age,
    location: "Dhaka"
}
console.log(user1)

/// Object Destructuring
const product = {
    label: "book",
    price: 100,
    stock: 20,
    sellPrice: undefined
}

const {label, stock} = product;

console.log(label, " " , stock);

// renaming variables when destructuring

const {label: productLabel, stock: productStock} = product;

console.log(productLabel, " " , productStock);

// destructuring into a function
const test = ({label, stock})=>{ // if you dont need all the properties of any object
    console.log(label, " ", stock )
}

test(product)