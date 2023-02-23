//1. convert radian to degree
function radianToDegree(radian) {
    const remainder = radian * 57.296;
    return remainder;
};
const isRadian = 5
const isDegree = radianToDegree(isRadian);
console.log(isDegree);

//3. calculate the total oil price that I have to pay 
/* 
diesel------->114;
petrol-------->130;
octane--------->135; 
*/

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const dieselCost = dieselQuantity * dieselPrice;
    const petrolCost = petrolQuantity * petrolPrice;
    const octaneCost = octaneQuantity * octanePrice;

    const totalCost = dieselCost + petrolCost + octaneCost;
    return totalCost;

}
const totalQuantity = oilPrice(10, 5, 15);
console.log(totalQuantity);
// 4.
const myFriend = { name: 'Tom', friend: 'Rock' }
const yourFriend = { name: 'Rock', friend: 'Tom' }