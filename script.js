document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});
    



let currentCard = 3;

const cardText = [
  {
    model: '2023 Audi A6',
    location: 'Cape Town, South Africa',
    price: 'R2 500 000',
    monthly: 'R19 500 p/m',
    spec: 'New Car | Automatic | Petrol',
    dealer: 'Audi Center Cape Town'
  },
  {
    model: '2024 BMW 640d',
    location: 'Sandton, Johannesburg',
    price: 'R3 259 000',
    monthly: 'R24 599 p/m',
    spec: 'New Car | Automatic | Diesel',
    dealer: 'BMW Sandton'
  },
  {
    model: '2023 Mercedes E-Class',
    location: 'Pretoria, Gauteng',
    price: 'R3 000 000',
    monthly: 'R23 000 p/m',
    spec: 'New Car | Automatic | Petrol',
    dealer: 'Mercedes-Benz Pretoria'
  },
  {
    model: '2024 Porsche 911',
    location: 'Durban, KZN',
    price: 'R4 000 000',
    monthly: 'R30 000 p/m',
    spec: 'New Car | Automatic | Petrol',
    dealer: 'Porsche Centre Durban'
  },
  {
    model: '2023 Lexus RX',
    location: 'Bloemfontein, Free State',
    price: 'R1 800 000',
    monthly: 'R15 000 p/m',
    spec: 'New Car | Automatic | Hybrid',
    dealer: 'Lexus Bloemfontein'
  }
];

// Function to update dynamic text based on the active card
function updateDynamicText(index) {
 document.querySelector('.car-model').innerHTML = cardText[index].model;
 document.querySelector('.car-location').innerHTML = cardText[index].location;
 document.querySelector('.car-price').innerHTML = cardText[index].price;
 document.querySelector('.car-price-monthly').innerHTML = cardText[index].monthly;
// Update menu-car3 spec and dealer
document.querySelector('.menu-car3-spec').innerHTML = cardText[index].spec;
document.querySelector('.menu-car3-dealer').innerHTML = cardText[index].dealer;
}

function moveLeft() {
 if (currentCard === 1) {
   currentCard = 5;
 } else {
   currentCard--;
 }
 updateCarousel();
 showMenu(currentCard - 1); // Update menu with the new active card new
}

function moveRight() {
 if (currentCard === 5) {
   currentCard = 1;
 } else {
   currentCard++;
 }
 updateCarousel();
 showMenu(currentCard - 1); // Update menu with the new active card new
}

function updateCarousel() {
 const cards = document.querySelectorAll('.carousel-card');
 cards.forEach((card, index) => {
   card.classList.remove('card1', 'card2', 'card3', 'card4', 'card5');
 });
 if (currentCard === 1) {
   cards[0].classList.add('card3');
   cards[1].classList.add('card4');
   cards[2].classList.add('card5');
   cards[3].classList.add('card1');
   cards[4].classList.add('card2');
   //New
   updateDynamicText(0);
 } else if (currentCard === 2) {
   cards[0].classList.add('card2');
   cards[1].classList.add('card3');
   cards[2].classList.add('card4');
   cards[3].classList.add('card5');
   cards[4].classList.add('card1');
   //New
   updateDynamicText(1);
 } else if (currentCard === 3) {
   cards[0].classList.add('card1');
   cards[1].classList.add('card2');
   cards[2].classList.add('card3');
   cards[3].classList.add('card4');
   cards[4].classList.add('card5');
   //New
   updateDynamicText(2);
 } else if (currentCard === 4) {
   cards[0].classList.add('card5');
   cards[1].classList.add('card1');
   cards[2].classList.add('card2');
   cards[3].classList.add('card3');
   cards[4].classList.add('card4');
   //New
   updateDynamicText(3);
 } else if (currentCard === 5) {
   cards[0].classList.add('card4');
   cards[1].classList.add('card5');
   cards[2].classList.add('card1');
   cards[3].classList.add('card2');
   cards[4].classList.add('card3');
   //New
   updateDynamicText(4);
 }
}

let innerIndex = [0, 0, 0, 0, 0];  // Track index for each card's inner carousel

function moveInnerLeft(cardNum) {
 const carousel = document.getElementById(`carousel${cardNum}`);
 const images = carousel.querySelectorAll('.carousel-images img');
 const totalImages = images.length;
 innerIndex[cardNum - 1] = (innerIndex[cardNum - 1] - 1 + totalImages) % totalImages;
 carousel.querySelector('.carousel-images').style.transform = `translateX(-${innerIndex[cardNum - 1] * 100}%)`;
 updatePagination(cardNum);
}

function moveInnerRight(cardNum) {
 const carousel = document.getElementById(`carousel${cardNum}`);
 const images = carousel.querySelectorAll('.carousel-images img');
 const totalImages = images.length;
 innerIndex[cardNum - 1] = (innerIndex[cardNum - 1] + 1) % totalImages;
 carousel.querySelector('.carousel-images').style.transform = `translateX(-${innerIndex[cardNum - 1] * 100}%)`;
 updatePagination(cardNum);
}

function updatePagination(cardNum) {
 const pagination = document.getElementById(`pagination${cardNum}`);
 pagination.querySelectorAll('.dot').forEach((dot, idx) => {
   dot.classList.remove('active');
   if (idx === innerIndex[cardNum - 1]) {
     dot.classList.add('active');
   }
 });
}

function generatePagination(cardNum, totalImages) {
 const pagination = document.getElementById(`pagination${cardNum}`);
 pagination.innerHTML = '';  // Clear previous dots
 for (let i = 0; i < totalImages; i++) {
   const dot = document.createElement('span');
   dot.classList.add('dot');
   if (i === 0) {
     dot.classList.add('active');
   }
   pagination.appendChild(dot);
 }
}

// Initialize pagination for each card
document.querySelectorAll('.carousel-inner').forEach((carousel, idx) => {
 const totalImages = carousel.querySelectorAll('img').length;
 generatePagination(idx + 1, totalImages);
});



// Array to store menu information for each card
const carMenus = [
  {
    services: ['Free Delivery', 'Financing Available'],
    dealer: 'Gert Kortnieman',
    dealerImage: '/home/sheldon/Desktop/Afri Cars/images/gert.webp', // Replace with actual image paths
    dealerLocation: 'Audi Center Sandton', // Add dealer location
    specs: 'New Car | Automatic | Petrol' // Add specs
  },
  {
    services: ['24/7 Support', 'Trade-In Offers'],
    dealer: 'James Worthington',
    dealerImage: '/home/sheldon/Desktop/Afri Cars/images/james.jpeg',
    dealerLocation: 'BMW Dealership, Johannesburg', // Add dealer location
    specs: 'Pre-Owned | Manual | Diesel' // Add specs
  },
  {
    services: ['Maintenance Included', 'Test Drives Available'],
    dealer: 'Anna Muller',
    dealerImage: '/home/sheldon/Desktop/Afri Cars/images/anna.png',
    dealerLocation: 'Mercedes-Benz Centurion', // Add dealer location
    specs: 'New Car | Automatic | Petrol' // Add specs
  },
  {
    services: ['Personalized Packages', 'Extended Warranty'],
    dealer: 'David Stein',
    dealerImage: '/home/sheldon/Desktop/Afri Cars/images/david.jpg',
    dealerLocation: 'Porsche Center Durban', // Add dealer location
    specs: 'New Car | Automatic | Petrol' // Add specs
  },
  {
    services: ['Low APR Financing', 'Certified Pre-Owned'],
    dealer: 'Michael Bosch',
    dealerImage: '/home/sheldon/Desktop/Afri Cars/images/michael.jpg',
    dealerLocation: 'Lexus Dealership, Bloemfontein', // Add dealer location
    specs: 'Pre-Owned | Automatic | Hybrid' // Add specs
  }
];

// Select the necessary DOM elements
const menu = document.getElementById('menu');
const menuServices = document.getElementById('menu-services');
const dealerName = document.querySelector('.dealer-name');
const dealerImage = document.querySelector('#dealer-info img');
const carModel = document.querySelector('.menu-car-model');
const carPrice = document.querySelector('.menu-car-price');
const carLocation = document.querySelector('.menu-car2-place');
const dealerLocation = document.querySelector('.menu-car3-dealer'); // New dealer location
const monthlyPrice = document.querySelector('.menu-car2-price'); // New monthly price
const carSpecs = document.querySelector('.menu-car3-spec'); // New car specs
let currentActiveCard = document.querySelector('.carousel-card.card3');
let isMenuVisible = false; // Track if menu is visible or hidden

// Ensure correct card and menu content are synced at start
function initializeMenu() {
  let initialCardIndex = Array.from(document.querySelectorAll('.carousel-card')).indexOf(currentActiveCard);
  updateMenuAndCardContent(initialCardIndex); // Ensure the menu is correct at load
  addCardClickListener(currentActiveCard, initialCardIndex); // Attach click listener to the initial active card
}

// Function to toggle the menu's visibility
function toggleMenu() {
  if (isMenuVisible) {
    menu.classList.remove('show'); // Hide the menu if visible
  } else {
    menu.classList.add('show'); // Show the menu if hidden
  }
  isMenuVisible = !isMenuVisible; // Toggle menu visibility state
}

// Function to update the menu content and the card information based on the clicked card
function updateMenuAndCardContent(cardIndex) {
  const { services, dealer, dealerImage: imgSrc, dealerLocation: location, specs } = carMenus[cardIndex];
  const { model, location: carLocationText, price, monthly } = cardText[cardIndex];

  // Update the services list dynamically in the menu
  menuServices.innerHTML = services.map(service => `
    <li>
      <span class="icon">✓</span>${service}
    </li>
  `).join('');

  // Update dealer information
  dealerName.textContent = dealer; // Dealer name
  dealerImage.src = imgSrc; // Dealer image
  dealerLocation.textContent = location; // Update dealer location

  // Update car information
  carModel.textContent = model;
  carPrice.textContent = price;
  carLocation.textContent = carLocationText;
  monthlyPrice.textContent = monthly; // Update monthly price
  carSpecs.textContent = specs; // Update car specs
}

// Function to add a click listener to the active card
function addCardClickListener(card, cardIndex) {
  card.addEventListener('click', function cardClickHandler(event) {
    // Check if the click target is a navigation arrow
    if (event.target.classList.contains('inner-control-prev') || event.target.classList.contains('inner-control-next')) {
      // Do nothing if the target is a navigation arrow
      return;
    }

    // If menu is visible and card is clicked again, hide the menu
    if (isMenuVisible) {
      toggleMenu();
    } else {
      // If menu is hidden, show it and update content
      toggleMenu();
      updateMenuAndCardContent(cardIndex);
    }
  });
}

// Prevent clicks on inner controls (navigation arrows) from bubbling up to the card
document.querySelectorAll('.inner-control-prev, .inner-control-next').forEach(control => {
  control.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click from bubbling to the card
  });
});


// Function to remove the click listener from a card
function removeCardClickListener(card) {
  // Clone the node to remove all listeners
  const newCard = card.cloneNode(true);
  card.parentNode.replaceChild(newCard, card);
  return newCard;
}

// Function to set the new active card and remove the listener from the previous one
function setActiveCard(newActiveCard, cardIndex) {
  if (currentActiveCard !== newActiveCard) {
    // Remove the listener from the previous active card
    currentActiveCard = removeCardClickListener(currentActiveCard);
    currentActiveCard = newActiveCard; // Update the active card
    addCardClickListener(newActiveCard, cardIndex); // Attach click listener to the new active card
    updateMenuAndCardContent(cardIndex); // Always update menu content when changing cards
  }
}

// Function to handle carousel change
function onCarouselChange() {
  const newActiveCard = document.querySelector('.carousel-card.card3'); // Adjust based on carousel logic
  const cardIndex = Array.from(document.querySelectorAll('.carousel-card')).indexOf(newActiveCard);

  // Set the new active card and update menu and card content
  setActiveCard(newActiveCard, cardIndex);
  if (isMenuVisible) {
    updateMenuAndCardContent(cardIndex); // Update content without toggling visibility
  }
}

// Prevent clicks on inner controls from bubbling up
const innerControls = document.querySelectorAll('.inner-control-prev, .inner-control-next');
innerControls.forEach(control => {
  control.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click from bubbling to the card
  });
});

// Trigger carousel change for navigating cards
document.querySelector('.carousel-control-prev').addEventListener('click', onCarouselChange);
document.querySelector('.carousel-control-next').addEventListener('click', onCarouselChange);

// Ensure menu matches the first card on initial load
window.addEventListener('load', initializeMenu); // Ensure menu sync on page load
