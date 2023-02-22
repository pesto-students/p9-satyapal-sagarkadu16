function memoize (fn) {
    let cache = new Map();
    return function (...args) {
        let key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

// Given example
function add(...args) {
    return args.reduce((acc, ele) => acc + ele, 0)
}

let memoizeAdd = memoize(add);

console.time();
console.log(memoizeAdd(6,6,3,5));
console.timeEnd();
// 6.752ms
console.time();
console.log(memoizeAdd(6,6,3,5));
console.timeEnd();
// 0.115ms



