// range progress button move

let mySlider = document.getElementById('my-slider');
let selector = document.querySelector('.progress-button');

mySlider.addEventListener('input', slider);


function slider() {
 selector.style.left = this.value + '%';
 }


let prices = [8, 12, 16, 24, 36];

 //target pageviews
let pageviews = document.querySelector('.pageviews');

//target price
let price = document.querySelector('.price-number');


/*Display Price and Pageviews*/

document.getElementById('my-slider').addEventListener('input', (event)=> {
  let value = event.target.value;

  let newPrices;

  let toggle = document.querySelector('.toggle-input');

  if(toggle.checked == true) {

    newPrices = prices.map(element => element * 25 / 100);

    if (value >= 1 && value < 25) {
      price.textContent = `$${newPrices[0]}.00`;
      pageviews.textContent = '10K PAGEVIEWS';
    } else if (value >= 26 && value < 50) {
      price.textContent = `$${newPrices[1]}.00`;
      pageviews.textContent = '50K PAGEVIEWS';
    } else if (value >= 51 && value < 75) {
      price.textContent = `$${newPrices[2]}.00`;
      pageviews.textContent = '100K PAGEVIEWS';
    } else if (value >= 76 && value < 100) {
      price.textContent = `$${newPrices[3]}.00`;
      pageviews.textContent = '500K PAGEVIEWS';
    } else {
      price.textContent = `$${newPrices[4]}.00`;
      pageviews.textContent = '1M PAGEVIEWS';
    }
  } else {

    if (value >= 1 && value < 25) {
      price.textContent = `$${prices[0]}.00`;
      pageviews.textContent = '10K PAGEVIEWS';
    } else if (value >= 26 && value < 50) {
      price.textContent = `$${prices[1]}.00`;
      pageviews.textContent = '50K PAGEVIEWS';
    } else if (value >= 51 && value < 75) {
      price.textContent = `$${prices[2]}.00`;
      pageviews.textContent = '100K PAGEVIEWS';
    } else if (value >= 76 && value < 100) {
      price.textContent = `$${prices[3]}.00`;
      pageviews.textContent = '500K PAGEVIEWS';
    } else {
      price.textContent = `$${prices[4]}.00`;
      pageviews.textContent = '1M PAGEVIEWS';
    }
  }
 
})

// For mobile screen change discount part conent

 window.addEventListener('resize', function() {

  let discount = document.querySelector('.discount');
  let screenWidth = screen.width;

  if(screenWidth >= 320 && screenWidth <= 600) {
    discount.textContent = '-25%';
   } else {
    discount.textContent = '25% discount';
   }
 });
 

