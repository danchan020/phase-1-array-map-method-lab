const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//tutorials is an Array, how to access an Array and iterate?

const stringSplit = tutorials.map(function(tutorial){
  //return console.log(tutorial)
  const newTutorial = tutorial.split(" ");
  //console.log (newTutorial);
  return newTutorial;
} )

// Split each string in each array to individual letter strings, how? 
//https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
// using charAt(index).

const UpperCombine= stringSplit.map(function(wordArr){
  //console.log(word)
  const charSplit = (wordArr.map(indv => indv.charAt(0).toUpperCase() + indv.slice(1)));
  //console.log (charSplit)
  return charSplit;
})

// Put these mfkin strings back together

const finishLine = UpperCombine.map(function(newWord){
  const UpdatedTutorial = newWord.join(" ");
  return UpdatedTutorial;
})

const titleCased = () => {
  return finishLine
}

