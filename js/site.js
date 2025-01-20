// Array to store cart items
const cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart array
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear existing items in the cart display
    cartItemsContainer.innerHTML = "";

    let total = 0;

    // Loop through the cart and display each item
    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.price} kr 
            <button onclick="removeFromCart(${index})" style="color: red; cursor: pointer;">X</button></p>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
    });

    // Update the total price
    cartTotalElement.textContent = total;
}

// Function to remove items from the cart
function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);
    updateCart();
}
