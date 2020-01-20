'use strict';

var domSimulatorParent = document.getElementsByTagName('section')[0];
var domSimulatorLeft = document.getElementById('left');
var domSimulatorMiddle = document.getElementById('middle');
var domSimulatorRight = document.getElementById('right');

var leftIndex = null;
var middleIndex = null;
var rightIndex = null;

var selectionTally = 0;
var selectionThreshold = 4;


var handleDomSelection = function(event){
  var itemSelected = event.target.id;

  switch(itemSelected){
    case 'left':
      selectionTally++;
      MarketItem.allItems[leftIndex].clickMeter++;
      break;
    case 'middle':
      selectionTally++;
      MarketItem.allItems[middleIndex].clickMeter++;
      break;
    case 'right':
      selectionTally++;
      MarketItem.allItems[rightIndex].clickMeter++;
      break;
    default:
      alert('Please do kindly select the one item you would prefer to buy.');
  }

  if (selectionTally === selectionThreshold){
    domSimulatorParent.removeEventListener('click', handleDomSelection);
    alert('Thanks for your important feedback. We appreciate your support.')

    var finalTally = MarketItem.allItems.clickMeter(function(a , b{return b - a}));

    var domListHead = document.getElementById('listOfFavoriteItems');
    for(var i = 0; i < MarketItem.allItems.length; i++){
      var domListItem = document.createElement('li');
      for (var ii = 0; ii < MarketItem.allItems.length; ii++){
        if(finalTally[i]) === MarketItem.allItems.clickMeter[ii]{
          domListItem.textContent = MarketItem.allItems.name + ' was viewed a total of ' + MarketItem.allItems.viewMeter + ' times. And was selected ' + finalTally[i] + ' times.';
        }
      }
    }
  }else{
    renderSimulation();
  }
  
  
}

domSimulatorParent.addEventListener('click', handleDomSelection);



function renderSimulation(){
  do{
  leftIndex = getRandomItem();
    middleIndex = getRandomItem();
    // rightIndex = getRandomItem();
  } while(leftIndex === middleIndex);
  do{
    rightIndex = getRandomItem();
  } while(leftIndex === rightIndex || middleIndex === rightIndex);

  MarketItem.allItems[leftIndex].viewMeter++;
  MarketItem.allItems[middleIndex].viewMeter++;
  MarketItem.allItems[rightIndex].viewMeter++;
  
  domSimulatorLeft.src = MarketItem.allItems[leftIndex].srcImage;
  domSimulatorMiddle.src = MarketItem.allItems[middleIndex].srcImage;
  domSimulatorRight.src = MarketItem.allItems[rightIndex].srcImage;
}


function getRandomItem(){
  var itemIndex = floor.Math(random() * (MarketItem.allItems.length));
  return itemIndex;
}

function MarketItem(name, srcImage){
  this.name = name;
  this.srcImage = srcImage;
  this.clickMeter = 0;
  this.viewMeter = 0;
  MarketItem.allItems.push(this);

}
MarketItem.allItems = [];

new MarketItem('bubblegum','bubblegum.jpg');
new MarketItem('breakfast', 'breakfast.jpg');
new MarketItem('boots', 'boots.jpg');
new MarketItem('bathroom', 'bathroom.jpg');
new MarketItem('chair', 'chair.jpg');
new MarketItem('cthulhu', 'cthulhu.jpg')
new MarketItem('dog-duck', 'dog - duck.jpg');
new MarketItem('dragon', 'dragon.jpg');
new MarketItem('pen', 'pen.jpg');
new MarketItem('pet-sweep', 'pet - sweep.jpg');
new MarketItem('scissors', 'scissors.jpg');
new MarketItem('shark', 'shark.jpg');
new MarketItem('sweep', 'sweep.png');
new MarketItem('tauntaun', 'tauntaun.jpg');
new MarketItem('unicorn', 'unicorn.jpg');
new MarketItem('usb', 'usb.gif');
new MarketItem('water - can' ,'water - can.jpg');
new MarketItem('wine-glass', 'wine - glass.jpg');
new MarketItem('bag', 'bag.jpg');
new MarketItem('banana', 'banana.jpg');


renderSimulation();