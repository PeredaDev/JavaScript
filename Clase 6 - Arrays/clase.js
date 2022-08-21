let myFruits = ['Apple', 'Banana'];
let otherFruits = ['Orange', 'Lemon'];
myFruits.push(...otherFruits);
myFruits.unshift('Pinnapple');
console.log(myFruits);


for (const pereda of myFruits) {
    console.log(pereda);
}
myFruits.forEach(element => {
    console.log(element);
    
});