let topList;
let count = (sentence) => {
  let senArr = sentence.trim().split(' ');
  let reorderedArr = [];
  let existingWord = [];
  let pairs = [];
  let wordCount = [];

  for (let i = 0; i < senArr.length; i++) {
    if (!existingWord.includes(senArr[i])) {
      existingWord.push(senArr[i]);
    }
  }
  for (let word of existingWord) {
    let counter = 0;
    for (let element of senArr) {
      if(word === element) {
        counter++;
      }
    } 
    pairs.push([word, counter]);
    wordCount.push(counter);
  }
  pairs.sort((a, b) => b[1] - a[1]);
  console.log('pairs', pairs);
  console.log('existing word', existingWord);
  console.log('wordcount', wordCount);
  console.log('pairs.length', pairs.length);

  let topThree = 'none';
  let topOne = `${pairs[0][0]} - ${pairs[0][1]}x`;
  let topTwo = `${pairs[1][0]} - ${pairs[1][1]}x`;
  if (pairs.length > 2) {
    topThree = `${pairs[2][0]} - ${pairs[2][1]}x`;
  }


  return topList = [topOne, topTwo, topThree];
}
console.log(topList);
$(document).ready(function() {
  $('form#userInput').submit(function(e) {
    e.preventDefault();
    let sentence = $('input#userSentence').val();
    count(sentence);
    $('.topWords').append(`<li>${topList[0]}</li>`)
    $('.topWords').append(`<li>${topList[1]}</li>`)
    $('.topWords').append(`<li>${topList[2]}</li>`)
  })
})