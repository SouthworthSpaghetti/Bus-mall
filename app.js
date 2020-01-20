'use strict';

var domSimulatorParent = document.getElementsByTagName('section');
var domSimulatorLeft = document.getElementById('left');
var domSimulatorMiddle = document.getElementById('middle');
var domSimulatorRight = document.getElementById('right');

var leftIndex = null;
var middleIndex = null;
var rightIndex = null;

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
new MarketItem('unicorn, 'unicorn.jpg');
new MarketItem('usb', 'usb.gif');
new MarketItem('water - can' ,'water - can.jpg');
new MarketItem('wine-glass', 'wine - glass.jpg');
new MarketItem('bag', 'bag.jpg');
new MarketItem('banana', 'banana.jpg');


