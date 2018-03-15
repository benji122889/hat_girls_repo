document.getElementById("calcBtn").addEventListener("click", function() {
   let price = document.getElementById("price");
   let cost = document.getElementById("cost");
   let profit = price.value - cost.value;
   document.getElementById("profit").value = profit;
});
