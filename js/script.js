const divList = document.querySelector('div.hatImg');
const imgList = divList.querySelectorAll('img');


// This for loop iterates through the node list of images in the HTML document
// while at the same time loops through the array of images in file
// hatarray.js and applies the images to the image carousel in the document.

    for (j = 0; j < imgList.length;) {

        for (i = 0; i < fascinators.length; i += 1) {
            imgList[j].src = fascinators[i];
            if (j < imgList.length) {
                j += 1;  
            }
        }
}

// click event handler for "calculate" button
// subtracts total product costs from retail price and presents its value in the "profit margin" input field
document.getElementById("calcBtn").addEventListener("click", function() {
    let price = document.getElementById("price");
    let cost = document.getElementById("cost");
    let profit = price.value - cost.value;
    document.getElementById("profit").value = profit;
 });