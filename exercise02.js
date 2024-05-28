function createCounter(){
    let count = 0
    return function (){
        count ++;
        console.log(count)
    }
}
let myCounter1 = createCounter();

//console.log(myCounter1);
myCounter1();
myCounter1();
myCounter1();
myCounter1();
myCounter1();

let myCounter2 = createCounter();

myCounter2()