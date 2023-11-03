function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
window.addEventListener("load", function() {
  this.document.getElementById("pizzaOrder").addEventListener("submit", handleOrder)
  this.document.getElementById("confirmOrder").addEventListener("click", confirmOrder)
  this.document.getElementById("reload").addEventListener("click", reloadThePage)
  this.document.getElementById("cancelOrder").addEventListener("click", cancelOrder)
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
  document.getElementById("totalPage").setAttribute("class", "total");
  document.querySelector("body").setAttribute("class", "bodyWhite");
  if (myOrder.size === "14") {
    document.getElementById("insertSize").append("14 inch")
  } else {
    document.getElementById("insertSize").append("18 inch")
  }
  if (myOrder.toppings.length > 0) {
    document.getElementById("insertToppings").append("Cheese with ")
    for (i = 0; i < myOrder.toppings.length; i++) {
      if (i === 0) {
        document.getElementById("insertToppings").append(myOrder.toppings[i])
      } else if (i + 2 > myOrder.toppings.length) {
        document.getElementById("insertToppings").append(", and " + myOrder.toppings[i])
      }
       else {
        document.getElementById("insertToppings").append(", " + myOrder.toppings[i])
      }
    }
  } else {
    document.getElementById("insertToppings").append("Cheese")
  }
  document.getElementById("orderRelay").setAttribute("class", "center")
}

function confirmOrder() {
  document.getElementById("totalPage").setAttribute("class", "hidden");
  document.getElementById("orderRelay").setAttribute("class", "hidden");
  let waitTime = Math.floor(Math.random() * 5)
  if (waitTime === 0) {
    document.getElementById("waitTime").append("20 minutes")
  } else if (waitTime === 1) {
    document.getElementById("waitTime").append("40 minutes")
  } else if (waitTime === 2) {
    document.getElementById("waitTime").append("1 hour")
  } else if (waitTime === 3) {
    document.getElementById("waitTime").append("2 hours")
  } else {
    document.getElementById("waitTime").append("3 hours")
  }
  document.getElementById("approvedPage").setAttribute("class", "center")
}

function reloadThePage() {
  location.reload();
}

function cancelOrder() {
  document.getElementById("approvedPage").setAttribute("class", "hidden");
  document.getElementById("placeName").setAttribute("class", "hidden");
  document.querySelector("body").setAttribute("class", "redBackground");
  document.getElementById("canceledOrder").setAttribute("class", "white")
}