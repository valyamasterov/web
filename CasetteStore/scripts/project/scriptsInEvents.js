


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
		
		fetch('https://portachi.com/mbl/check.php', {
		            method: 'POST',
		            headers: {
		                'Content-Type': 'application/json',
		            },
		            body: JSON.stringify({ items: cart }),  // Send product IDs to the backend
		        })
		        .then(response => response.json())
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

