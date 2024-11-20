import { all_product } from "../data/products.js";
import { carts, removeCart } from "../data/cart.js";

console.log("add carts", carts)

let checkoutHTML = "";

// loop through cart items to display in checkout page
carts.forEach((cartItem) => {
//   console.log(cartItem);
  let productId = cartItem.id;

  let productFind = "";

  all_product.forEach((product) => {
    // console.log(product.id)
    if (productId == product.id) {
      productFind = product;
    }
  });

  console.log("found" , productFind);
  // displaying cart products
  checkoutHTML += `
     <div class="cartitems-format cartitems-format-main carts-js-${productFind.id}">
        <img src="${productFind.image}" alt="${productFind.image}" class="carticon-product-icon" />
        <p>${productFind.name}</p>
        <p>$${productFind.new_price}</p>
        <p>$${productFind.old_price}</p>
        <button  data-product-id="${productFind.id}" class="cartitems-remove-icon delete-btn" >Delete Cart</button>
    </div>
     `;

//   return checkoutHTML
})

document.querySelector(".cart-products").innerHTML += checkoutHTML;
document.querySelector('.nav-cart-count').innerHTML = carts.length; 

// remove cart 
document.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', () => {
    let productId = button.dataset.productId;
    console.log(productId)

    // remove card 
    removeCart(productId)

    const container = document.querySelector(`.carts-js-${productId}`);

    container.remove();
    })
});