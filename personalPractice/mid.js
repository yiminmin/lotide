const middle = function(array) {
  const result = [];
  if (!Array.isArray(array)) {
    return result;
  } else if (array.length < 3) {
    return result;
  } else {
    const middle = array.length / 2;
    if (Number.isInteger(middle)) {
      result.push(array[middle - 1], array[middle]);
    } else {
      result.push(array[Math.floor(middle)]);
    }
    return result;
  }
};

const array = [1,2,3,4,5];
console.log(middle(array));