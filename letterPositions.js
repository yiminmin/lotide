const letterPosition = function(sentence) {
   const positions = {};

   for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (positions[letter]) {
        positions[letter].push(i);
      } else {
        positions[letter] = [i];
      }
    }
   }

   return positions;
};

// const sentence = "lighthouse in the house";
// const result = letterPosition(sentence);
// console.log(result);

module.exports = letterPosition;