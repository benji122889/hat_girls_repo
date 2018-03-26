# Hat Girls inventory organizer

## Desciption

I created this as an application idea for my sisters company [The Hat Girls](https://thehatgirls.com). She and her friend own the company
and are the official hat designers for the Kentucky Derby. The idea here is for her to have a user friendly interface that acts a little 
bit like quickbooks. It is a work in progress and as I have tweeked it, I have learned more and more about front end development. I see 
a lot of changes for it in the future. i.e. The way it looks, adding backend programming, maybe even having it made strickly with 
backend development. Anyways, work in progress. Please excuse all of the things I have commented out, they are just things I am curently
working on adding to the app. I used bootstrap for device size responsiveness. I Started on this as a project for school at
[codeLouisville](https://codelouisville.org). Below is documentaion of the requirements for a passing project. Enjoy!

## Custom CSS Selectors
```
The selectors I created are:

1. .navImg {
  This class selector sets the navigation images width and height to 100% of its parent element.
}

2. .hyperlinkImg {
  This class selector insures the linkable image has no padding, adds 20px to its right margin to add distance from the navigation links 
  when the viewport is sized for medium screens, the width is set at 25% of its parent element and the image floats to the left of the 
  nav bar.
}

3. #main-heading {
  This ID selector adds color to the main heading, adds 10px padding to the top and 20px to the bottom for room, insures there is no 
  bottom margin and changes its font to cursive.
}

4. .mockUp {
  This class selector is here in the case of having more list items added to the page. It will add 4rem of bottom margin for room between
  list items.
}

5. .calcBtn, .resetBtn {
  These class selectors add background and border colors to both the "Calculate" and "Reset" buttons below the form. They also add 5px of
  top margin to place room between the buttons and the form.
}

```

## Custom JavaScript
```
The JavaScript functions I created are:

1. function imageIteration() {
   This function calls a for loop. It iterates through the node list of image elements in the HTML document list item while at the same
   time loops through the array of images in file hatarray.js and applies the images to the image carousel in the document.
}

2. document.getElementById("calcBtn").addEventListener("click", function() {
  click event handler for "calculate" button under form. This addEventListener function subtracts total product costs from retail price
  and presents its value in the "profit margin" input field
}

3. document.getElementById("resetBtn").addEventListener("click", function() {
  click event handler for "Reset" button under form. This addEventListener function clears input values of entire form.
}
```
