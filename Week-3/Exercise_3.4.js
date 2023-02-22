// function createStack() {
//     return {
//         items: [],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     }
// }

// const stack = createStack();

// --------------------------------------------------------------
// Refactoring above code so that there should not be encapsulation broken
// first way: using function constructor
// with new keyword, we can create object with values attached to this keyword
// keeping items with let, will not expose items array in external object
function CreateStack () {
    let items = [];

    this.push = function (item) {
        items.push(item)
    }

    this.pop = function () {
        return items.pop();
    }

    this.log = function () {
        console.log(items);
    }
}

// second way: using function & returning object

function CreateStack () {
    let items = [];

    const push = (item) => {
        items.push(item)
    }

    const pop = () => {
        return items.pop();
    }

    const log = () => {
        console.log(items);
    }
    
    return {
        push,
        pop,
        log
    }
}

let stack = new CreateStack();
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);
stack.pop();
stack.log();