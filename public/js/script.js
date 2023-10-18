

// Function to handle form submission (Reservation page)
function handleSubmit(event) {
    event.preventDefault();
    // Add your form handling code here
}

// Function to add items to the cart (Shop page)
function addToCart(itemId) {
    // Add your cart functionality here
}

// Function to update the cart quantity (Shop page)
function updateCartQuantity(itemId, quantity) {
    // Add your cart update functionality here
}

// Function to remove items from the cart (Shop page)
function removeFromCart(itemId) {
    // Add your cart removal functionality here
}

// Function to display a success message (Reservation page)
function showSuccessMessage(message) {
    // Add your success message display code here
}

// Function to toggle navigation menu (used in all pages)
function toggleMenu() {
    // Add your navigation menu toggle code here
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Example: Attach an event listener to the reservation form
    const reservationForm = document.querySelector('#reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleSubmit);
    }

    // Example: Attach event listeners for cart interactions on the shop page
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => addToCart(button.dataset.itemId));
    });

    const updateCartButtons = document.querySelectorAll('.update-cart-button');
    updateCartButtons.forEach(button => {
        button.addEventListener('click', () => updateCartQuantity(button.dataset.itemId, button.dataset.quantity));
    });

    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-button');
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', () => removeFromCart(button.dataset.itemId));
    });

    // Example: Attach event listener for showing success message
    const successMessage = document.querySelector('#success-message');
    if (successMessage) {
        showSuccessMessage('Reservation successful!'); // You can replace this with your own message
    }

    // Example: Attach event listener for menu toggle button
    const menuToggleButton = document.querySelector('#menu-toggle-button');
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', toggleMenu);
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = [];
  
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
  
        cart.push({ name, price });
        updateCart();
      });
    });
  
    function updateCart() {
      cartItemsList.innerHTML = '';
      let total = 0;
  
      cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
      });
  
      cartTotal.innerText = `$${total.toFixed(2)}`;
    }
  });
  
