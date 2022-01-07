module.exports = function reverse (n) {
  let array = n.toString().split('')
  if (array[0] == '-') {
    let minus = array.shift()
  }
  return Number(array.reverse().join(''))

}
