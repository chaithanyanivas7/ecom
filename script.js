function addToCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}

function displayCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

if(cartItems){

cartItems.innerHTML="";

cart.forEach(item =>{

let li = document.createElement("li");

li.textContent = item.name + " - ₹" + item.price;

cartItems.appendChild(li);

total += item.price;

});

document.getElementById("total").textContent = "Total: ₹" + total;

}

}

displayCart();
