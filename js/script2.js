let userImage = document.querySelector(".character-image");
let userDetails = document.querySelector(".character-details");
let userLocalObject = localStorage.getItem("character");
let userObject = JSON.parse(userLocalObject);
let li = document.createElement("li");

console.log(localStorage.getItem("random1"));
console.log(localStorage.getItem("random2"));
console.log(localStorage.getItem("random3"));

li.innerHTML = userObject.name;
userDetails.appendChild(li);
userImage.src = userObject.image;

li = document.createElement("li");
li.innerHTML = userObject.status;
userDetails.appendChild(li);

li = document.createElement("li");
li.innerHTML = userObject.species;
userDetails.appendChild(li);

li = document.createElement("li");
li.innerHTML = userObject.gender;
userDetails.appendChild(li);

