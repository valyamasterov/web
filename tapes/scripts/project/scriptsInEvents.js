


const scriptsInEvents = {

	async EventSheet1_Event20(runtime, localVars)
	{
		let cart = [];
		
		document.querySelectorAll('.add-to-cart').forEach(button => {
		    button.addEventListener('click', function () {
		        const productId = this.getAttribute('data-product-id');
		        cart.push(productId);  // Add the product ID to the cart
		        console.log('Added to cart:', productId);
		    });
		});
		
		document.getElementById('open-cart').addEventListener('click', function () {
		
		    // Check if the cart is empty
		    if (cart.length === 0) {
		        alert("Your cart is empty.");
		        return;
		    }
		
		fetch('https://portachi.com/mbl/checkout_session.php', {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({ items: cart }),  // Send product IDs to the backend
		})
		.then(response => {
		    if (!response.ok) {
		        throw new Error('Network response was not ok: ' + response.statusText);
		    }
		    return response.json();
		})
		.then(data => {
		    if (data.url) {
		        window.location.href = data.url;  // Redirect to Stripe checkout
		    } else {
		        alert('Error: ' + data.error);
		    }
		})
		.catch(error => console.error('Error:', error));
		
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

