/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())


// Step 3: declare and instantiate a variable to hold the current year


// Step 4: place the value of the current year variable into the HTML file


// Step 5: declare and instantiate a variable to hold the name of your picture


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
let myName = "Johanny Joel"
let nameElement = document.querySelector("#name");
nameElement.textContent = myName;

let myFood = "Garri and Egusi Soup"
let foodElement = document.querySelector("#food");
foodElement.textContent = myFood;
// script.js
// Declare an array variable to hold my favorite foods
let favoriteFoods = ["Beans", "Rice", "Yam", "Garri and Soup"];

// Use JavaScript to modify the element who's id is "food" found in the task2.html file
let foodList = document.querySelector("#food");
foodList.innerHTML = ""; // Clear the list
favoriteFoods.forEach(function(food) {
  let li = document.createElement("li");
  li.textContent = food;
  foodList.appendChild(li);
});

// Declare and instantiate a variable to hold another of my favorite foods
let newFavorite = "Burgers";

// Add the value stored in this variable to the favorite food array
favoriteFoods.push(newFavorite);

// Repeat Step 2
foodList.innerHTML = ""; // Clear the list
favoriteFoods.forEach(function(food) {
  let li = document.createElement("li");
  li.textContent = food;
  foodList.appendChild(li);
});

// Remove the first element in the favorite foods array
favoriteFoods.shift();

// Repeat Step 2
foodList.innerHTML = ""; // Clear the list
favoriteFoods.forEach(function(food) {
  let li = document.createElement("li");
  li.textContent = food;
  foodList.appendChild(li);
});

// Remove the last element in the favorite foods array
favoriteFoods.pop();

// Repeat Step 2
foodList.innerHTML = ""; // Clear the list
favoriteFoods.forEach(function(food) {
  let li = document.createElement("li");
  li.textContent = food;
  foodList.appendChild(li);
});



let currentYear = new Date().getFullYear();
let yearElement = document.querySelector("#year");
yearElement.textContent = currentYear;

let picturePath = "images/myself.jpeg";
let pictureElement = document.querySelector("#picture");
pictureElement.setAttribute("src", picturePath);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



