// ================================variables=============================
const cart = [
  { name: "iPhone 15", price: 45000, qty: 1 },
  { name: "Samsung Galaxy S24", price: 38000, qty: 1 },
  { name: "AirPods Pro", price: 9500, qty: 2 },
];
const store = {
  Name: "TechNest",
  phone: "01148565196",
  city: "Aswan",
};
const storeDive = document.querySelector("#store-name");
const storInf = document.querySelector("#store-info");
const countDive = document.querySelector("#count");
const cartDive = document.querySelector("#cart");
const totalDive = document.querySelector("#total");
const clicOpenDive = document.querySelector(".container-cart-data");
const titleItemes = document.querySelector(".title");
const freeShipping = document.querySelector(".count-discaound");
const colors = [
  "#5DCAA5",
  "#AFA9EC",
  "#EF9F27",
  "#12e7a4",
  "#5DCAA5",
  "#AFA9EC",
  "#EF9F27",
  "#12e7a4",
];
// ===============================functions=======================================
function showData(data) {
  let count = 0;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    data.innerHTML += `<div class="parent-show gap-2">
    <div class="style rounded-3" style="background:${colors[i]}"></div><li class="d-flex justify-content-between align-items-center w-100"><div class=" d-flex flex-column"><span class="fw-bold">${cart[i].name}</span><span class="total-price"> ${cart[i].price} EGP * ${cart[i].qty}</span></div> <div class="fw-bold"> ${cart[i].price * cart[i].qty} EGP</div></li>
    </div>
    `;

    count += cart[i].qty;
    total += cart[i].price * cart[i].qty;
  }
  return { count, total };
}
function free(value) {
  if (value > 50000) {
    freeShipping.innerHTML += `
    <div style="color:${colors[3]}"><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="none">
		<path fill="currentColor" d="M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.58a1.33 1.33 0 0 0 2.3.92l.29-.3A2.33 2.33 0 0 1 7.6 16l.1.1a2.5 2.5 0 0 0 1.71.68h2.65a3 3 0 0 0 1.82-.7l.17-.15l.16-.15a3 3 0 0 1 1.82-.7h.87z" opacity=".2" />
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.9 15.02V9.5c0-2.45 0-3.68-.67-4.5a3 3 0 0 0-.44-.44c-.83-.67-2.05-.67-4.5-.67m-9.56 7.73v3.36c0 1 .81 1.8 1.8 1.8m13.41-9.72h1.13c.73 0 1.1 0 1.43.12a2 2 0 0 1 .41.2c.3.2.52.5.96 1.09a8 8 0 0 1 1.08 1.63q.12.3.2.6c.12.48.12.97.12 1.96v.36c0 1.66 0 2.5-.47 3.05l-.25.25c-.56.47-1.4.47-3.06.47" />
		<circle cx="6.07" cy="17.52" r="2.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="rotate(90 6.07 17.52)" />
		<circle cx="15.93" cy="17.52" r="2.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="rotate(90 15.93 17.52)" />
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.67 16.79h4.66M7.66 5.55H1.73m8.6 3.15H4.4" />
	</g>
</svg>
</span><span>free shipping</span></div>
    `;
  } else {
    freeShipping.innerHTML += `
    <div style="color:${colors[2]}"><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="none">
		<path fill="currentColor" d="M16.9 9.88c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.73c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v5.58a1.33 1.33 0 0 0 2.3.92l.29-.3A2.33 2.33 0 0 1 7.6 16l.1.1a2.5 2.5 0 0 0 1.71.68h2.65a3 3 0 0 0 1.82-.7l.17-.15l.16-.15a3 3 0 0 1 1.82-.7h.87z" opacity=".2" />
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.9 15.02V9.5c0-2.45 0-3.68-.67-4.5a3 3 0 0 0-.44-.44c-.83-.67-2.05-.67-4.5-.67m-9.56 7.73v3.36c0 1 .81 1.8 1.8 1.8m13.41-9.72h1.13c.73 0 1.1 0 1.43.12a2 2 0 0 1 .41.2c.3.2.52.5.96 1.09a8 8 0 0 1 1.08 1.63q.12.3.2.6c.12.48.12.97.12 1.96v.36c0 1.66 0 2.5-.47 3.05l-.25.25c-.56.47-1.4.47-3.06.47" />
		<circle cx="6.07" cy="17.52" r="2.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="rotate(90 6.07 17.52)" />
		<circle cx="15.93" cy="17.52" r="2.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="rotate(90 15.93 17.52)" />
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.67 16.79h4.66M7.66 5.55H1.73m8.6 3.15H4.4" />
	</g>
</svg>
</span><span> Add ${50000 - value}EGP more for free shipping </span></div>
    `;
  }
}
// ================================add and delete===============================
cart.push({
  name: "keyboard",
  price: 400,
  qty: 1,
});
cart.unshift({
  name: "Gift",
  price: 0,
  qty: 1,
});
// cart.pop();
// cart.shift();
// ==================================add in html============================

storeDive.innerHTML += `
${store.Name}
`;
storInf.innerHTML += `
${store.city} | ${store.phone}
`;
clicOpenDive.innerHTML += `
<div class="click-open rounded-5 py-1 px-3 mt-2"style="color:${colors[3]}">Open now</div>
`;
let result = showData(cartDive);
countDive.innerHTML += `
you have ${result.count} items in your cart 
`;
free(result.total);
totalDive.innerHTML += `
<span class="fw-bold">Total</span>  <span class="fw-bold">${result.total.toFixed(2)} EGP</span>
`;
titleItemes.innerHTML += `
<span id="countitemes">${result.count} items</span>
`;
// =======================================================================
