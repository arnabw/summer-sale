let cart = 0,
  totalPrice = 0;
const allBtn = document.querySelectorAll("#cartBtn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    cart += 1;
    changeInnerText("cartTotal", cart);

    const li = document.createElement("li");
    li.innerText = `${cart}. ${e.target.parentNode.childNodes[3].innerText}: ${e.target.parentNode.childNodes[5].innerText}`;
    document.getElementById("theList").appendChild(li);

    totalPrice += splitThePrice(e.target.parentNode.childNodes[5].innerText);
    if (totalPrice >= 200) {
      const couponValid = getId("couponBtn");
      couponValid.classList.remove("cursor-not-allowed");
      couponValid.removeAttribute("disabled");
    }

    const price = `${totalPrice.toFixed(2)} $`;
    changeInnerText("totalPrice", price);
    changeInnerText("total", price);
  });
}
