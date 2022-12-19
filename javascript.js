const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

for (let i = 0; i < addToCartButtons.length; i++) {
  const button = addToCartButtons[i];
  button.addEventListener('click', addToCart);
}

function addToCart() {
  const button = this;
  button.innerHTML = 'Added to Cart';
  button.disabled = true;

  const cartCount = document.querySelector('.cart-count');
  cartCount.innerHTML = parseInt(cart
