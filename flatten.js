const flatten = function(arr){
  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          flattened.push(arr[i][j]);
        }
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}

//export function
module.exports = flatten;
