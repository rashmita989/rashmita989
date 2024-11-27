// Initialize cart items array and total price
let cartItems = [];
let total = 0;

// Function to add item to cart
function addToCart(plantName, price) {
    // Add item to cartItems array
    cartItems.push({ name: plantName, price: price });
    total += price; // Update total price

    // Update cart display
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceContainer = document.getElementById("totalPrice");

    // Clear the current list
    cartItemsContainer.innerHTML = "";

    // Display each item in the cart
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.textContent ='${item.name} - $${item.price}';
        cartItemsContainer.appendChild(li);
    });

    // Update total price
    totalPriceContainer.textContent = 'Total: $${total}';
}