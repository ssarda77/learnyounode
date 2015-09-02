var nums = process.argv.slice(2);
var sum = 0;
nums.forEach(function(x) {
  sum += Number(x);
});
console.log(sum);
