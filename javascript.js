function add(arr) {
  let sum = 0;
  for (let x of arr) {
    if (x % 2 == 0) {
      sum += x;
    }
  }
  console.log(sum)
}
let array=[1,2,3,4,5,14,12]
add(array)
