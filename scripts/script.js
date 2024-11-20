import { all_product } from "../data/products.js";
import { carts } from '../data/cart.js'
import { SaveToLocalStorage } from '../data/cart.js'

// displaying the products
all_product.forEach((product) => {
  product = `
  <div class="item">
    <img src='${product.image}' alt="${product.image}" /></Link>
    <p>${product.name}</p>
    <div class="item-prices">
      <div class="item-price-new">$${product.new_price}</div>
      <div class="item-price-old">$${product.old_price}</div>
    </div>
  <div class="item-btn">
      <button type="submit" class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  </div>
  </div>
  `
  document.querySelector(".products-item").innerHTML += product;
})


// add to cart functionality
const buttons = document.querySelectorAll('.add-to-cart')

/*
Event 
1- Event Listener
2- Event Type: click
3- Function: () => {... }

Event Target
1- button
1- button.addEventListener("click", () => {... })
4- Event Handler Function: () => {... }

Event Object Technique (Dataset Attribute)
1-element data-name= id
2- data- waa inaad ka hormarisaa
3- button.dataset.name

*/

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let productId = button.dataset.productId;
    console.log(productId);

    let matching = '';

    carts.forEach((cartItem) => {
      if (productId == cartItem.id) {
        matching = cartItem;
      }
    })

    if (matching) {
      matching.quantity += 1
    } else {
      carts.push({
        id: productId,
        quantity: 1
      })
    }

    console.log(carts)
  
    document.querySelector('.nav-cart-count').innerHTML = carts.length;  
    
    // save to localStorage
    SaveToLocalStorage()

  })
})