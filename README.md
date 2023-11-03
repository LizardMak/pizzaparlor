# _{Pizza Parlor}_

#### By _**{Hunter Empey}**_

#### _{A mock pizzeria website that takes your order}_

## GitHub Pages Link
[GitHub Pages Deployment](https://lizardmak.github.io/pizzaparlor/)

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _VSCode_

## Description

_{This website is a mock page for a fake pizza place called 'Papa Tony's', you can place orders for 14 or 18 inch pizzas with various toppings. The order will generate a total based on size and amount of toppings, then bring you to a confirmation screen where your total and order will be displayed to you. From here you can confirm the order or go back and order again. After an order is confirmed a random wait time will be generated with an option to cancel the order should you find the time too long.}_

## Setup/Installation Requirements

* _Ensure that both VSCode and Live Server Extension are installed_
* _Start blank project in VSCode_
* _Clone GitHub repo to VSCode using terminal_
* _Press 'go live' in the bottom right_
* _format_

## Known Bugs

* _None_

## License

Copyright (c) <2023> <Hunter Empey>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_{If you run into any issues, questions, concerns, or have ideas, please contact me through my email LizardMak@gmail.com.}_

Copyright (c) _2023_ _Hunter Empey_












Describe: handleOrder()

Test: "It should keep track of what size and toppings were chosen"
Code: pizzaSize = fourteenInch 
      checkedBoxes = pepperoni, greenPepper
Expected Output: 14
                ['greenPepper', 'pepperoni']

Test: "myOrder should contain my toppings and pizza size"
Code: pizzaSize = fourteenInch
      checkedBoxes = pepperoni, greenPepper
Expected Output: PizzaOrder {size: '14' toppings: ['green pepper', 'pepperoni']}                  

Describe: PizzaOrder.prototype.calculateTotal
Code: pizzaSize = fourteenInch
      checkedBoxes = pepperoni, greenPepper
Expected Output: 16
