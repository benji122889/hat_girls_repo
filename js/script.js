// click event handler for "calculate" button
// subtracts total product costs from retail price and presents its value in the "profit margin" input field
document.getElementById("calcBtn").addEventListener("click", function() {
   let price = document.getElementById("price");
   let cost = document.getElementById("cost");
   let profit = price.value - cost.value;
   document.getElementById("profit").value = profit;
});

// function hatList() {
//     for (i = 0; i < fascinators[0].length; )
// };
