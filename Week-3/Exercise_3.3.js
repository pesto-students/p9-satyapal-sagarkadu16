function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// invoking increment 3 times actually incresing value of count variable as increment function remembers count value in closure
// closure is function wrapped with its lexical scope (scope visible in source code)
// while log function remembers value of message, message string formed a string with initial value of count
// so on invoking log at very end gives string with initial value of count and not current one
