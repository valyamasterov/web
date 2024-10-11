


const scriptsInEvents = {

	async EventSheet1_Event14(runtime, localVars)
	{
		    // Get all "Add to Cart" buttons on the page
		    const addToCartButtons = document.querySelectorAll('.add-to-cart');
		    const productIds = Array.from(addToCartButtons).map(button => button.getAttribute('data-product-id'));
		
		    // Fetch stock information from the backend
		    fetch('https://portachi.com/mbl/check_stock.php', {  // Replace with the path to your PHP file
		        method: 'POST',
		        headers: {
		            'Content-Type': 'application/json',
		        },
		        body: JSON.stringify({ product_ids: productIds })
		    })
		    .then(response => response.json())
		    .then(stockData => {
		        // Iterate over each button and update it if the product is out of stock
		        addToCartButtons.forEach(button => {
		            const productId = button.getAttribute('data-product-id');
		            if (stockData[productId] !== undefined && stockData[productId] <= 0) {
		                button.textContent = 'SOLD OUT'; // Replace button text with "SOLD OUT"
		                button.disabled = true; // Optionally disable the button
		                button.classList.add('sold-out'); // Add a class for styling if needed
		            }
		        });
		    })
		    .catch(error => console.error('Error fetching stock data:', error));
	},

	async EventSheet1_Event15(runtime, localVars)
	{
    // Cart will store objects containing both ID and name
    let cart = [];


    // Function to add items to the cart, checks for duplicates
    function addToCart(productId, productName, button) {
        // Check if the item is already in the cart
        const isInCart = cart.some(item => item.id === productId);
        if (isInCart) {
            console.log(productName, 'is already in the cart.');
            return; // Do not add duplicates
        }

        // Add product object to the cart
        cart.push({ id: productId, name: productName });
        console.log('Added to cart:', productName);

        // Change button text to 'Added to Cart'
        button.textContent = 'Added to Cart';
        button.classList.add('added');
        renderCart(); // Refresh cart to show new items
        updateCartButtonText(); // Update cart button text
    }

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            addToCart(productId, productName, this); // Add item to cart with button reference
        });
    });

    const openCartButton = document.querySelector('.open-cart');
    const cartContainer = document.querySelector('.cart');
    const cartItemsList = document.getElementById('cart-items');

    // Function to render the cart items
    function renderCart() {
        cartItemsList.innerHTML = ''; // Clear the list
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.textContent = item.name; // Display product name

            const removeButton = document.createElement('span');
            removeButton.textContent = '-';
            removeButton.className = 'remove';
            removeButton.onclick = () => removeItem(index, item.id); // Pass the ID to removeItem

            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);
        });
    }

    // Function to remove an item from the cart
    function removeItem(index, productId) {
        cart.splice(index, 1);
        renderCart(); // Re-render the cart after removal
        updateCartButtonText(); // Update cart button text after removal
        revertAddToCartButton(productId); // Revert the button text for the removed item
    }

    // Function to revert the "Add to Cart" button text when an item is removed
    function revertAddToCartButton(productId) {
        // Find the button with the corresponding product ID
        const button = document.querySelector(`.add-to-cart[data-product-id="${productId}"]`);
        if (button) {
            button.textContent = 'Add to Cart'; // Revert text back to "Add to Cart"
            button.classList.remove('added'); // Remove the added class
        }
    }

    // Function to update the cart button text based on the cart's state
    function updateCartButtonText() {
        const itemCount = cart.length;
        openCartButton.textContent = `Cart (${itemCount})`; // Always show item count
    }

    // Toggle cart visibility on button click
    openCartButton.addEventListener('click', () => {
        const isCartVisible = cartContainer.style.display === 'block';
        cartContainer.style.display = isCartVisible ? 'none' : 'block';
        openCartButton.textContent = isCartVisible ? 'Cart (' + cart.length + ')' : 'Close Cart'; // Update button text based on visibility
    });

    // Initial rendering of the cart
    renderCart(); // Ensure the cart is rendered initially

// Checkout functionality
document.getElementById('open-checkout').addEventListener('click', function () {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Extract only product IDs for the POST request
    const productIds = cart.map(item => item.id);

    fetch('https://portachi.com/mbl/checkout_session.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: productIds }),  // Send only product IDs to the backend
    })
    .then(response => response.json())
    .then(data => {
        // Check if the response is valid and contains a success flag
        if (data && typeof data.success === 'boolean' && !data.success) {
            // If there are insufficient stock items, notify the user
            if (data.insufficient_stock_items && data.insufficient_stock_items.length > 0) {
                let alertMessage = "The following items have insufficient stock:\n";
                data.insufficient_stock_items.forEach(item => {
                    alertMessage += `${item.product_name} - Available: ${item.available_stock}, Attempted: ${item.attempted_quantity}\n`;
                });
                alert(alertMessage);
            }

            // Ignore the error if it’s undefined and continue
            if (data.error) {
                console.warn('Error: ', data.error); // Log the error without alerting the user
            }
        } else if (data && data.url) { // Ensure data is defined before accessing url
            window.location.href = data.url;  // Redirect to Stripe checkout
        } else {
            console.warn('Unexpected response structure:', data); // Log unexpected response
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally log an error message without alerting the user
    });
});
	},

	async EventSheet1_Event17(runtime, localVars)
	{
		    // Get all "Add to Cart" buttons on the page
		    const addToCartButtons = document.querySelectorAll('.add-to-cart');
		    const productIds = Array.from(addToCartButtons).map(button => button.getAttribute('data-product-id'));
		
		    // Fetch stock information from the backend
		    fetch('https://portachi.com/mbl/check_stock.php', {  // Replace with the path to your PHP file
		        method: 'POST',
		        headers: {
		            'Content-Type': 'application/json',
		        },
		        body: JSON.stringify({ product_ids: productIds })
		    })
		    .then(response => response.json())
		    .then(stockData => {
		        // Iterate over each button and update it if the product is out of stock
		        addToCartButtons.forEach(button => {
		            const productId = button.getAttribute('data-product-id');
		            if (stockData[productId] !== undefined && stockData[productId] <= 0) {
		                button.textContent = 'SOLD OUT'; // Replace button text with "SOLD OUT"
		                button.disabled = true; // Optionally disable the button
		                button.classList.add('sold-out'); // Add a class for styling if needed
		            }
		        });
		    })
		    .catch(error => console.error('Error fetching stock data:', error));
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

