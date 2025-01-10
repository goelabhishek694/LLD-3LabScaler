// let arr =  [20,10,3,400,45];
// arr.sort() //[10, 20, 3, 400, 45]

const people = [
    { name: "Charlie", age: 35 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
];


// console.log(people.sort());

//comparator function 
//ascending order 
people.sort((p1,p2) => {
    if(p1.name > p2.name) return 1
    return -1
})

//descednig order 
// people.sort((p1,p2) => {
//     return p2.age - p1.age
// })

console.log(people);
