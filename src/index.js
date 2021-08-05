
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = []
  if (matrix) {
    for (let index = 0; index < matrix.length; index++) {
      let arr = index % 2 == 0 ? matrix[index] : matrix[index].reverse();
      arr.map(x => {
        res.push(x);
      });
    }
  }
  return res;
}
