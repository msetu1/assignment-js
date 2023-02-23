// factorial for loop 
factorial = 1;
for (let i = 6; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial);

// sum is value 
sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;

}
console.log(sum);

// factorial function value 

/* function factorial(i) {
    if (i == 1) {
        return 1;
    }
    else {
        return i * factorial(i - 1);
    }
}
const result = factorial(6);
console.log(result); */

// function is sum velue 
/* function sum(i) {
    if (i == 1) {
        return 1;
    }
    else {
        return i + sum(i - 1);
    }
}
const result = sum(6);
console.log(result); */

/* function bestFriend(friends) {
    
}
const myBestFriend = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
console.log(myBestFriend); */

// count paper 
/* 
book1-------->100;
book2-------->200;
book3-------->300; 
*/
function paperRequirement(book1quantity, book2quantity, book3quantity) {
    const book1page = 100;
    const book2page = 200;
    const book3page = 300;

    const book1Piece = book1quantity * book1page;
    const book2Piece = book2quantity * book2page;
    const book3Piece = book3quantity * book3page;

    const totalpage = book1Piece + book2Piece + book3Piece;
    return totalpage;
}
const totalQuantity = paperRequirement(10, 30, 20);
console.log(totalQuantity);