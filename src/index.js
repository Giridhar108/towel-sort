
// You should implement your task here.

module.exports = function towelSort(arr) {
  if (arguments.length === 0) {
    return []
  } else if (arr.length <= 0) {
    return []
  }
  else if (arr.length <= 3) {
    let rev = arr[1]
    rev.sort((a, b) => b - a)
    arr.splice(1, 1, rev)
    return arr.reduce((result, element) => result.concat(element), [])
  }
  else (arr.length > 3)
  let rev = arr[1]
  rev.sort((a, b) => b - a)
  arr.splice(1, 1, rev)
  let revT = arr[3]
  revT.sort((a, b) => b - a)
  arr.splice(3, 1, revT)
  return arr.reduce((result, element) => result.concat(element), [])

}
