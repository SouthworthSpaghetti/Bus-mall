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
  event.preventDefault();
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

    
    // var finalTally = [];
    // finalTally.length = selectionThreshold;


    // for (var j = 0; j < selectionThreshold; j++){
    //   for (var jj = 0; jj < MarketItem.allItems.length; jj++){
    //     finalTally[j] = MarketItem.allItems.clickMeter[j];
    //   }
    // }
    // for (var ii = 0; ii < MarketItem.allItems.length; ii++) {
    //   if (finalTally[i] === MarketItem.allItems.clickMeter[ii]) {
    //     domListItem.textContent = MarketItem.allItems.name + ' was viewed a total of ' + MarketItem.allItems.viewMeter + ' times. And was selected ' + finalTally[i] + ' times.';
    // var finalTally = MarketItem.allItems.clickMeter(function(a , b){return b - a});

    var domListHead = document.getElementById('listOfFavoriteItems');
    for(var i = 0; i < MarketItem.allItems.length; i++){
      var domListItem = document.createElement('li');
      domListItem.textContent = MarketItem.allItems[i].name + ' was viewed a total of ' + MarketItem.allItems[i].viewMeter + ' times. And was selected ' + MarketItem.allItems[i].clickMeter + ' times.';
      domListHead.appendChild(domListItem);
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
  var itemIndex = Math.floor(Math.random() * (MarketItem.allItems.length));
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

new MarketItem('bubblegum','/img/bubblegum.jpg');
new MarketItem('breakfast', '/img/breakfast.jpg');
new MarketItem('boots', '/img/boots.jpg');
new MarketItem('bathroom', '/img/bathroom.jpg');
new MarketItem('chair', '/img/chair.jpg');
new MarketItem('cthulhu', '/img/cthulhu.jpg')
new MarketItem('dog-duck', '/img/dog-duck.jpg');
new MarketItem('dragon', '/img/dragon.jpg');
new MarketItem('pen', '/img/pen.jpg');
new MarketItem('pet-sweep', '/img/pet-sweep.jpg');
new MarketItem('scissors', '/img/scissors.jpg');
new MarketItem('shark', '/img/shark.jpg');
new MarketItem('sweep', '/img/sweep.png');
new MarketItem('tauntaun', '/img/tauntaun.jpg');
new MarketItem('unicorn', '/img/unicorn.jpg');
new MarketItem('usb', '/img/usb.gif');
new MarketItem('water - can','/img/water-can.jpg');
new MarketItem('wine-glass', '/img/wine-glass.jpg');
new MarketItem('bag', '/img/bag.jpg');
new MarketItem('banana', '/img/banana.jpg');


renderSimulation();