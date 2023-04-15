//Function to convert a word to simplified pig latin
const toPigLatin = function(word) {
  return word.slice(1) + word[0] + "ay";
}

//get command line arguments
const args = process.argv.slice(2);
//check if there are any arguments
if (args.length === 0) {
  console.log("Please provide one or more command line arguments.");
  process.exit(1);
}

// convert each argument to pig latin and join them to form a sentence
const pigLatinSetence = args.map(toPigLatin).join(" ");

//log the translated sentence to the console
console.log(pigLatinSetence);