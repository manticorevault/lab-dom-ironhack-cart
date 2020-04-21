// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span')

  const totalPrice = price * quantity;
  subtotal.innerHTML = totalPrice;

  return totalPrice;
  
  //... your code goes here
}

function calculateAll() {
  let finalPrice = 0;

  // ITERATION 2
  const allProducts = [...document.querySelectorAll('.product')];
  allProducts.forEach(element => {
    finalPrice += updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here

  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = finalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
