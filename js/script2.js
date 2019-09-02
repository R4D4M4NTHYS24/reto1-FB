let userImage = document.querySelector(".character-image");
let userDetails = document.querySelector(".character-details");
let userLocalObject = localStorage.getItem("character");
let userObject = JSON.parse(userLocalObject);
let li = document.createElement("li");
li.innerHTML = userObject.name;
userDetails.appendChild(li);
userImage.src = userObject.image;