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
  displayTotal(myOrder, total); 
}

PizzaOrder.prototype.calculateTotal = function() {
  let price = parseInt(this.size);
  for (i = 0; i < this.toppings.length; i++) {
    price += 1;
  }
  return price
}

function displayTotal(myOrder, total) {
  document.getElementById("menu").setAttribute("class", "hidden");
  document.getElementById("insertTotal").append(total);
  document.getElementById("totalPage").setAttribute("class", "total")
  if (myOrder.size === "14") {
    document.getElementById("insertSize").append("14 inch")
  } else {
    document.getElementById("insertSize").append("18 inch")
  }
  if (myOrder.toppings.length > 0) {
    document.getElementById("insertToppings").append("Cheese with ")
    
  } else {
    document.getElementById("insertToppings").append("Cheese")
  }
  document.getElementById("orderRelay").setAttribute("class", "center")
}