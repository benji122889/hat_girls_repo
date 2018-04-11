// jquery intellisense reference path //
/// <reference path="../../../typings/globals/jquery/index.d.ts" />

// let listItems = document.querySelector('List');
const divList = document.querySelector('div.hatImg');
const imgList = divList.querySelectorAll('img');

// const list = document.querySelectorAll(".fascinators");
const hatList = document.querySelector("ul.fascinators");
const mockUp = hatList.querySelectorAll('li');
const htmlList = hatList.children;


    // for (l = 0; l < htmlList.length; l += 1) {
    //     let cln = mockUp[0].cloneNode(true);
    //     hatList.appendChild(cln);
    //     if (htmlList.length === hatArray.length) {
    //         break;
    //     }
    // }

// This for loop iterates through the node list of image elements in the HTML document list item
// while at the same time loops through the array of images in file
// hatarray.js and applies the images to the image carousel in the document.

function firstCarousel() {
    for (j = 0; j < imgList.length;) {
        for (i = 0; i < hatArray[0].length; i += 1) {
            imgList[j].src = hatArray[0][i];
            if (j < imgList.length) {
                j += 1;
            }
        }
    }
}

function secondCarousel() {
    let divList2 = document.querySelector('div.hatImg2');
    let imgList2 = divList2.querySelectorAll('img');
    for (j = 0; j < imgList2.length;) {
        for (i = 0; i < hatArray[1].length; i += 1) {
            imgList2[j].src = hatArray[1][i];
            if (j < imgList2.length) {
                j += 1;
            }
        }
    }
}

    firstCarousel(htmlList[0]);
    secondCarousel(htmlList[1]);




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