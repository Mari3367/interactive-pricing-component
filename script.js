// For mobile screen change discount part content

window.addEventListener('resize', function() {

  let discount = document.querySelector('.discount');
  let screenWidth = screen.width;

  if(screenWidth >= 279 && screenWidth <= 600) {
    discount.textContent = '-25%';
   } else {
    discount.textContent = '25% discount';
   }
 });
 

 /*Get DOM Elements*/

 //price number
 const cost = document.querySelector('p.price-number');
 //frequency
 const frequency = document.querySelector('span.frequency');
 //views
 const viewsNumber = document.querySelector('div.pageviews');
 //track percentage for colored part
 const inputRange = document.querySelector('input#range');
 //toggle
 const toggle = document.querySelector('input#my-toggle')
 const form = document.querySelector('form#main-part');

 const VIEWS_DATA = [
  {
      pageViews: '10k',
      monthlyCost: 8,
      leftPercentage: 0
  },
  {
      pageViews: '50k',
      monthlyCost: 12,
      leftPercentage: 25
  },
  {
      pageViews: '100k',
      monthlyCost: 16,
      leftPercentage: 50
  },
  {
      pageViews: '500k',
      monthlyCost: 24,
      leftPercentage: 75
  },
  {
      pageViews: '1M',
      monthlyCost: 36,
      leftPercentage: 100
  },
]

form.addEventListener('submit', (e) => e.preventDefault());

const getData = () => {
  const currentValue = inputRange.value;
  const index = currentValue - 1;
  return {pageViews, monthlyCost, leftPercentage} = VIEWS_DATA[index];
}

const updateViews = () => {
  const {pageViews} = getData();
  viewsNumber.textContent = `${pageViews} PAGEVIEWS`;
}

const isAnnualFrequency = () => { return toggle.checked };

const updateFrequency = (isAnnual) => {
  if (isAnnual) {
    frequency.textContent = '/year';
  } else {
    frequency.textContent = '/month';
  }
}

const updatePrice = () => {
  const {monthlyCost} = getData();
  const isAnnual = isAnnualFrequency();
  const price = isAnnual ? ((monthlyCost * 12) * 0.25) : monthlyCost;
  cost.textContent = `$${price.toFixed(2)}`;
  updateFrequency(isAnnual);
}

const updateTrackPercentage = () => {
  const {leftPercentage} = getData();
  form.style.setProperty('--left', leftPercentage);
}

const updateForm = () => {
  updateViews();
  updatePrice();
  updateTrackPercentage();
}

inputRange.addEventListener('input', updateForm);
