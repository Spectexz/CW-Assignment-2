const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    starterPrice.innerHTML = `$0 <span> / year </span>`;
    proPrice.innerHTML = `$22.99 <span> / year </span>`;
  } else {
    starterPrice.innerHTML = `$0 <span> / month </span>`;
    proPrice.innerHTML = `$1.99 <span> / month </span>`;
  }
});
