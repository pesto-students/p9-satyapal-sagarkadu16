let Employee1 = {
    name: 'Sagar Kadu',
    department: 'IT',
    position: 'SDE',
    getDepartment: function () {
        return this.department;
    }
};

let Employee2 = {
    name: 'Pranjal Kumar',
    department: 'HR',
    position: 'Trainee',
    getDepartment: function () {
        return this.department;
    }
}

// bind method binds the function permanently
console.log(Employee1.getDepartment()); // IT
// above function run bounded by object
let fn = Employee1.getDepartment;
console.log(fn()); // undefined
// above is unbounded function
// now we can use bind to bound function to specific scope
let fn1 = Employee1.getDepartment.bind(Employee1);
let fn2 = Employee1.getDepartment.bind(Employee2);
console.log(fn1(), fn2()); // IT HR


// call
//  5 7 4 2 6
// finding max
console.log(Math.max(5,7,4,2,6));
console.log(Math.max.call(null, 5,7,4,2,6)) // call helps at compile time, when we know definite number of args available
console.log(Math.max.apply(null, [5,7,4,2,6])) // apply helps at runtime, when we dont know number of args available