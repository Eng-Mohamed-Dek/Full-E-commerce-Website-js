export let carts = JSON.parse(localStorage.getItem("cartItems")) || [
  { id: 1, quantity: 4 }
];

console.log(carts);

// Save to localStorage
export function SaveToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(carts));
}

// remove card 
export function removeCart(productId) {
  // make new array
  const newArray = [];

  // iterate through the cart
  carts.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newArray.push(cartItem);
    }
  });

  carts = newArray;
  
  SaveToLocalStorage();
}
