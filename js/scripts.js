let count = (sentence) => {
  let senArr = sentence.trim().split(' ');
  let senArrCopy = senArr.slice();
  let reorderedArr = [];
  let existingWord = [];
  let pair = [];
  let counter = 0;
  for (let i = 0; i < senArr.length; i++) {
    // if (existingWord.includes(senArr[i])) {
    //   return;
    // }
    senArrCopy.forEach(function(element) {
      if (senArr[i] === element) {
        if (!existingWord.includes(senArr[i])) {
          existingWord.push(senArr[i]);
          counter = 1;
        } else if (existingWord.includes(senArr[i])) {
          counter++;
        }
      } else if (senArr[i] !== element) {
        if (!existingWord.includes(element)) {
          existingWord.push(element);
        }
        counter = 1;
      }
      senArrCopy.shift();
      // console.log('senArr[i]', senArr[i], 'counter', counter);
      let varPair = `${senArr[i]} - ${counter}`;
      console.log('varPair', varPair);
      if (pair.includes(varPair)) {
        return varPair;
      } else {
        pair.push(varPair);
        console.log('pair', pair);
      }
    })
    // pair.push(`${senArr[i]} - ${counter}`);
    // console.log('pair', pair);
  }
  // console.log('existing word', existingWord);
}

$(document).ready(function() {
  $('form#userInput').submit(function(e) {
    e.preventDefault();
    let sentence = $('input#userSentence').val();
    count(sentence);
  })
})