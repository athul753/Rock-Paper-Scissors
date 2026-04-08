// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// let c=capitalizeFirstLetter("ABSCD");
// console.log(c);
const arr=[1,2,3,4,5];
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
};
let b =sumOfTripledEvens(arr);
console.log(b);