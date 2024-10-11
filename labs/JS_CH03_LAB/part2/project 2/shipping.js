"use strict";

const shipping = () =>{
  const purchase = parseFloat(document.getElementById("purchase").value);
  let shipping = 0;
  if(purchase <= 25.00){
    shipping = 1.50;
  }
  else{
    shipping = purchase * 0.1;
  }
  const total = purchase + shipping;

  alert(`Purchase price: $${purchase.toFixed(2)}\nShipping and Handling: $${shipping.toFixed(2)}\nTotal: $${total.toFixed(2)}`);
}