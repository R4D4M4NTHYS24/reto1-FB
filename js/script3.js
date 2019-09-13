let length = 0;
let character = {};
let postElements;
let characterPosition;
let characterPosition2;
let characterA;
let a;
let characterImg
let characterFigure;
let characterSpan;
let img;
let userImage;
let userDetails;
let span;
let aCreate;
let figure;
let fi;
let vect = [];







function userInfo() {
   
    fetch('https://rickandmortyapi.com/api/character/').then((respuesta) => {
        return respuesta.json();
        
    })
    .then((respuesta) => {

        
       
        userImage = document.querySelector(".image");
        characterA = document.querySelector(".post-list");
        characterFigure = document.querySelector(".post");
        characterSpan = document.querySelector(".post");
        characterImg = document.querySelector(".post-image"); 
        userImage.src = character.image; 
        length = respuesta.results.length; 
        postElements = document.getElementsByClassName('post');
        
        for (let index = 0; index <= length; index++) {           

            
            a = document.createElement("a");
            figure = document.createElement("figure"); 
            span = document.createElement("span"); 
            img = document.createElement("img");
                                 
            a.setAttribute('href',"details.html");
            a.setAttribute('class',"post");
            characterA.appendChild(a);

            figure.setAttribute('class',"post-image"); 

            span.setAttribute('class',"post-overlay"); 

            img.setAttribute('src',`${userImage.src}`);                       
            img.setAttribute('class',"image");             
            
            a.appendChild(figure);
            a.appendChild(span);
            figure.appendChild(img);
                     
            console.log("ejecute");       
                      
            characterPosition = index;            
            userImage.src = character.image;            
            character = respuesta.results[characterPosition];         
            
           
            postElements[index].addEventListener('click', function(){
                console.log("entre");
                console.log(index);
                console.log(character);
                localStorage.setItem('character', JSON.stringify(respuesta[index]));
            });    
            
            
        }
        
        
       
        

        

        



    })
    
}

userInfo();