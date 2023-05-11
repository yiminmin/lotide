const middle = function(array) {
  const result = [];
  if (Array.isArray(array)) {
    if (array.length < 3) {
      return result;
    } else {
      const middle = array.length/2;
      if (Number.isInteger(middle)) {
        result.push(array[middle-1]);
        result.push(array[middle]);
      } else {
        result.push(array[Math.floor(middle)]);
      }
      return result;

    }

  } else {
    return result;
  }
}



module.exports = middle;
