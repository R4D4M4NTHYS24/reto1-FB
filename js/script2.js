let userImage = document.querySelector(".character-image");//Referencia al DOM donde mostrar la imagen del character
let userDetails = document.querySelector(".character-details");//Referencia al DOM donde mostrar la informacion del character
let userLocalObject = localStorage.getItem("character");//obtiene el JSON del localstorage con el character seleccionado a objeto de nuevo
let userObject = JSON.parse(userLocalObject);//Convierte el JSON del localstorage con el character seleccionado a objeto de nuevo
let li = document.createElement("li");// Variable encargada de crear los LI que mostraran la informacion del personaje seleccionado

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

