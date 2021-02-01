const schoolFriendsAge = [10, 14, 18, 19, 22, 23];
const collegeFriendsAge = [23, 25, 18, 17];
const allFriendsAge = [...schoolFriendsAge, 35, ...collegeFriendsAge];
// three dots used for combined multiple array bind together and make them one single array
console.log(allFriendsAge);

const foodPrice = [120, 230, 360, 145];
// console.log(Math.max(foodPrice)); it show NaN
console.log(Math.max(...foodPrice));
// three dots used here for find max number in an array easily