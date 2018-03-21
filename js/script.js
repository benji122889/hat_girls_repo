// let listItems = document.querySelector('List');
const divList = document.querySelector('div.hatImg');
const imgList = divList.querySelectorAll('img');


// const hatList = document.querySelector("ul.fascinators");
// const mockUp = hatList.querySelectorAll('li');
// const cln = mockUp[0].cloneNode(true);

//     for (i = 0; i < hatArray.length; i += 1) {
//         hatList[i] += hatList.appendChild(cln, hatList.childNodes[0]);
//     }


// This for loop iterates through the node list of image elements in the HTML document
// while at the same time loops through the array of images in file
// hatarray.js and applies the images to the image carousel in the document.

    for (j = 0; j < imgList.length;) {
        
        for (i = 0; i < hatArray[0].length; i += 1) {
            imgList[j].src = hatArray[0][i];
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

//  click event handler for "reset" button
//  clears input values of form
 document.getElementById("resetBtn").addEventListener("click", function() {
    let price = document.getElementById("price");
    let cost = document.getElementById("cost");
    let profit = document.getElementById("profit");
    price.value = "";
    cost.value = "";
    profit.value = "";
 });