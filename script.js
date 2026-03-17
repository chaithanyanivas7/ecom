function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price});

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert("Added to Cart");

}

function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = cart.length;

let elements = document.querySelectorAll("#cart-count");

elements.forEach(el => el.textContent = count);

}

function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");

let total = 0;

if(cartItems){

cartItems.innerHTML="";

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.textContent = item.name + " - ₹" + item.price;

cartItems.appendChild(li);

total += item.price;

});

document.getElementById("cart-total").textContent = "Total: ₹"+total;

}

}

function clearCart(){

localStorage.removeItem("cart");

location.reload();

}

updateCartCount();
loadCart();
