// Task 1: Add Product to Cart Function
function addToCart(product, price, quantity) {
    if (!product) {
        throw new Error('Product name is required.');
    }
    if (price <= 0) {
        throw new Error('Invalid product price.');
    }
    if (quantity <= 0 || !Number.isInteger(quantity)) {
        throw new Error('Invalid quantity.');
    }
    // Add logic here for adding product details and quantity to cart
    cart.push({ product, price, quantity });
}

// Task 2: Checkout Function
let cart = []; // This array should contain items added by addToCart

function checkout() {
    if (cart.length === 0) {
        throw new Error('Cart is empty. Add items before checkout.');
    }
    // Add logic here for proceeding with checkout
    console.log('Proceeding to checkout with items:', cart);
}

// Example usage:
try {
    addToCart("Laptop", 1200, 2); // Valid case
    addToCart("", 30, 1); // Should throw an error: "Product name is required."
} catch (error) {
    console.error(error.message);
}

try {
    addToCart("Mouse", -15, 3); // Should throw an error: "Invalid product price."
} catch (error) {
    console.error(error.message);
}

try {
    addToCart("Keyboard", 50, "abc"); // Should throw an error: "Invalid quantity."
} catch (error) {
    console.error(error.message);
}

try {
    checkout(); // Should throw an error: "Cart is empty. Add items before checkout."
} catch (error) {
    console.error(error.message);
}