function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
window.addEventListener("load", function() {
  this.document.getElementById("pizzaOrder").addEventListener("submit", handleOrder)
})

function handleOrder() {
  event.preventDefault();
  const pizzaSize = document.querySelector("input[name=size]:checked").value;
  let pizzaToppings = [];
  let checkedBoxes = document.querySelectorAll("input[name=toppings]:checked")
  for (i = 0; i < checkedBoxes.length; i++) {
    pizzaToppings.push(checkedBoxes[i].value)
  }
  let myOrder = new PizzaOrder(pizzaSize, pizzaToppings)
  let total = myOrder.calculateTotal();
  displayTotal(total); 
}

PizzaOrder.prototype.calculateTotal = function() {
  let price = parseInt(this.size);
  for (i = 0; i < this.toppings.length; i++) {
    price += 1;
  }
  return price
}

function displayTotal(total) {
  document.getElementById("menu").setAttribute("class", "hidden");
  document.getElementById("insertTotal").append(total);
  document.getElementById("totalPage").setAttribute("class", "total")
}