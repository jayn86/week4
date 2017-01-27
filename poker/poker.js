// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {

  $(".btn").on("click", function(event){
    event.preventDefault()

  var myArray = [0,0,0,0,0]
  myArray[0] = getDeck()[getRandomInt(0,51)]
  for(i=1; i<6; i++){
    myArray[i] = getDeck()[getRandomInt(0,51)]
    if(myArray[i]==myArray[i-1])
        myArray[i] = getDeck()[getRandomInt(0,51)]
  }

  $("#c1").attr("src","http://golearntocode.com/images/cards/" + myArray[1] + ".png")
  $("#c2").attr("src","http://golearntocode.com/images/cards/" + myArray[2] + ".png")
  $("#c3").attr("src","http://golearntocode.com/images/cards/" + myArray[3] + ".png")
  $("#c4").attr("src","http://golearntocode.com/images/cards/" + myArray[4] + ".png")
  $("#c5").attr("src","http://golearntocode.com/images/cards/" + myArray[5] + ".png")

  })
})

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
