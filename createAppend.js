// html elements
let body = document.querySelector("body");
let container = document.querySelector(".container");
// 1. Create an h2 element.
// - Store it in a variable called h2.
let h2 = document.createElement("h2");


// 2. Set the innerHTML of h2 to your name.
h2.innerHTML = "Praise Moses"


// 3. Style at least two different properties for the heading.



// 4. Select the container div and append the h2 element.
container.appendChild(h2);


// 5. Create a paragraph element.
// - Store it in a variable called para.
let para = document.createElement("p")

// 6. Set the innerHTML of para to a fact about yourself.
para.innerHTML = "I love music"

// 7. Style at least two different properties for the paragraph.


// 8. Select the container div and append the paragraph element.
container.appendChild(para)


// Uncomment the code below after completing 1-8.
// Where do you see this on the page?
// Why is it located there even though the body is selected?
let h1 = document.createElement('h1');
h1.innerHTML = "My Webpage";
body.appendChild(h1);