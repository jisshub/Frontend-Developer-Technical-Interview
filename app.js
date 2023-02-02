// Implicit and Explicit Binding


// case 1: Using anonymous function
const fun = {
    name: 'vijay',
    display: ()=> {
        console.log(this.name)
    }
}

const data = {
    name: 'ajith'
}

// bind new object into display function.
// ie we replace current object in display function
// with data object. So the name is updated.
fun.display.call(data)


