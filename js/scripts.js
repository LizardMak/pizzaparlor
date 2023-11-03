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
  console.log(myOrder); 
}

