'use strict';

var domSimulatorParent = document.getElementsByTagName('section')[0];
var domSimulatorLeft = document.getElementById('left');
var domSimulatorMiddle = document.getElementById('middle');
var domSimulatorRight = document.getElementById('right');

var leftIndex = null;
var middleIndex = null;
var rightIndex = null;

var selectionTally = 0;
var selectionThreshold = 25;
var recordLastView = [];
recordLastView.length = 3;



var handleDomSelection = function(event){
  event.preventDefault();
  var itemSelected = event.target.id;
  var booleanProperClick = false;
  switch(itemSelected){
  case 'left':
    booleanProperClick = true;
    selectionTally++;
    MarketItem.allItems[leftIndex].clickMeter++;
    break;
  case 'middle':
    booleanProperClick = true;
    selectionTally++;
    MarketItem.allItems[middleIndex].clickMeter++;
    break;
  case 'right':
    booleanProperClick = true;
    selectionTally++;
    MarketItem.allItems[rightIndex].clickMeter++;
    break;
  default:
    alert('Please do kindly select the one item you would prefer to buy.');
  }
  updateLocalStorage();//JAN22
  if (selectionTally === selectionThreshold){
    domSimulatorParent.removeEventListener('click', handleDomSelection);
    alert('Thanks for your important feedback. We appreciate your support.');

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



    renderChart();


    //DISPALY RESULTS LIST
    // var domListHead = document.getElementById('listOfFavoriteItems');
    // for(var i = 0; i < MarketItem.allItems.length; i++){
    //   var domListItem = document.createElement('li');
    //   domListItem.textContent = MarketItem.allItems[i].name + ' was viewed a total of ' + MarketItem.allItems[i].viewMeter + ' times. And was selected ' + MarketItem.allItems[i].clickMeter + ' times.';
    //   domListHead.appendChild(domListItem);
    //END DISPALY RESULTS LIST

  } else if (booleanProperClick === true){
    renderSimulation();
  }
};

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

  recordLastView = [leftIndex, middleIndex, rightIndex];

  MarketItem.allItems[leftIndex].viewMeter++;
  MarketItem.allItems[middleIndex].viewMeter++;
  MarketItem.allItems[rightIndex].viewMeter++;
  domSimulatorLeft.src = MarketItem.allItems[leftIndex].srcImage;
  domSimulatorMiddle.src = MarketItem.allItems[middleIndex].srcImage;
  domSimulatorRight.src = MarketItem.allItems[rightIndex].srcImage;
  updateLocalStorage();//JAN22
}


function getRandomItem(){
  do{
    var itemIndex = Math.floor(Math.random() * (MarketItem.allItems.length));
    console.log(itemIndex);
    console.log(recordLastView);
  } while (recordLastView.includes(itemIndex));

  return itemIndex;


}

function MarketItem(name, srcImage){
  this.name = name;
  this.srcImage = srcImage;
  this.clickMeter = 0;
  this.viewMeter = 0;
  MarketItem.allItems.push(this);
  updateLocalStorage();
  
}

function renderChart(){
  //GLOBAL DECLARATIONS UNWRAPPING
  var chartNameArray = [];
  var chartClickArray = [];
  var chartViewArray = [];
  // for (var i = 0; i < chartArray.length; i++){
  for (var ii = 0; ii < MarketItem.allItems.length; ii++){
    chartNameArray.push(MarketItem.allItems[ii].name);
    chartClickArray.push(MarketItem.allItems[ii].clickMeter);
    chartViewArray.push(MarketItem.allItems[ii].viewMeter);
  }

  var randomColor = [];
  for (var j = 0; j < MarketItem.allItems.length; j++){
    do{
      var newColor = Math.floor(Math.random() * 16777215).toString(16);
    }
    while (randomColor.includes(newColor));
    randomColor.push('#' + newColor);
  }
  console.log(randomColor);

  //DOM CHART STUFF
  var canvas = document.getElementById('whiteboard');
  var ctx = canvas.getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartNameArray,
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: chartClickArray,
        // data: [12, 19, 3, 5, 2, 3],
        backgroundColor: randomColor
        // [
        //   randomColor[0],
        //   randomColor[1],
        //   randomColor[2],
        //   randomColor[3],
        //   randomColor[4],
        //   randomColor[5],
        //   randomColor[6],
        //   randomColor[7],
        //   randomColor[8],
        //   randomColor[9],
        //   randomColor[10],
        //   randomColor[11],
        //   randomColor[12],
        //   randomColor[13],
        //   randomColor[14],
        //   randomColor[15],
        //   randomColor[16],
        //   randomColor[17],
        //   randomColor[18],
        //   randomColor[19]
        // ]
        ,
        borderColor: [
          // 'black'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: chartViewArray,
        // data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          // 'black'
        ],
        borderColor: [
          // 'black'
        ],
        borderWidth: 1
      }
      ]
      //
      // datasets: [{
      //   label: '# of Views',
      //   data: chartViewArray,
      //   // data: [12, 19, 3, 5, 2, 3],
      //   backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //   backgroundColor: [
      //     'rgba(255, 99, 132, 0.2)',
      //     'rgba(54, 162, 235, 0.2)',
      //     'rgba(255, 206, 86, 0.2)',
      //     'rgba(75, 192, 192, 0.2)',
      //     'rgba(153, 102, 255, 0.2)',
      //     'rgba(255, 159, 64, 0.2)'
      //   ],
      //   borderColor: [
      //     'rgba(255, 99, 132, 1)',
      //     'rgba(54, 162, 235, 1)',
      //     'rgba(255, 206, 86, 1)',
      //     'rgba(75, 192, 192, 1)',
      //     'rgba(153, 102, 255, 1)',
      //     'rgba(255, 159, 64, 1)'
      //   ],
      //   borderWidth: 1
      // }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}





MarketItem.allItems = [];

function updateLocalStorage() {
  var storageArrayStringify = JSON.stringify(MarketItem.allItems);
  localStorage.setItem('marketItemCampaign', storageArrayStringify);
}

function writeFromLocalStorage(){
  var storageArrayParse = JSON.parse(localStorage.getItem('marketItemCampaign'));
  // console.log('storageArrayParse' + storageArrayParse.length);
  for (var i = 0; i < storageArrayParse.length; i++){
    new MarketItem(storageArrayParse[i].name, storageArrayParse[i].srcImage);
    console.log('Click meter' + MarketItem.allItems[i].clickMeter);
    MarketItem.allItems[i].clickMeter = storageArrayParse[i].clickMeter;
    MarketItem.allItems[i].viewMeter = storageArrayParse[i].viewMeter;
  }
}//JAN22



if (localStorage.length < 1){
new MarketItem('bubblegum','/img/bubblegum.jpg');
console.log('Creating');
new MarketItem('breakfast', '/img/breakfast.jpg');
new MarketItem('boots', '/img/boots.jpg');
new MarketItem('bathroom', '/img/bathroom.jpg');
new MarketItem('chair', '/img/chair.jpg');
new MarketItem('cthulhu', '/img/cthulhu.jpg');
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
} else {
  writeFromLocalStorage();
};
// } else {
//   writeOverLocalStorage();//Jan22
// }

renderSimulation();
