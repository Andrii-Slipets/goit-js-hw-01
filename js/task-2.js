"use strict";
function getShippingMessage (country, price , deliveryFee ) {

    let totalPrice = price + deliveryFee;
    return  `"Shipping to ${country} will cost ${totalPrice} credits"`;
}
let country1 = 1;
let price1 = 80;
let deliveryFee1 = 170;
getShippingMessage (country1,price1,deliveryFee1);

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"