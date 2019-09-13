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

        length = respuesta.results.length; 
        
        for (let index = 0; index <= length; index++) {           

            
            a = document.createElement("a");
            figure = document.createElement("figure"); 
            span = document.createElement("span"); 
            img = document.createElement("img");
                                 
            a.setAttribute('href',"details.html");
            a.setAttribute('class',"post");

            figure.setAttribute('class',"post-image"); 

            span.setAttribute('class',"post-overlay"); 

            img.setAttribute('src',`${userImage.src}`);                       
            img.setAttribute('class',"image"); 

            characterA.appendChild(a);

            /*
            if(characterFigure == ""){      
            characterFigure = document.querySelector(".post");
            characterFigure.appendChild(figure);
            console.log("entreeee")
            } */
            //characterSpan = document.querySelector(".post");
            //characterSpan.appendChild(span);
            //characterImg = document.querySelector(".post-image");
            //characterImg.appendChild(img);           
                                  
            
            
            console.log("ejecute");       
            
            
            /*          
            characterFigure = document.getElementsByClassName(".post").nextElementSibling.innerHTML;
            characterSpan = document.getElementsByClassName(".post").nextElementSibling.innerHTML;
            */
           
            characterPosition = index;            
            userImage.src = character.image;            
            character = respuesta.results[characterPosition];         
            
            /*
            length[index].addEventListener('click', function(){
                console.log("entre");
                console.log(index);
                console.log(character);
                localStorage.setItem('character', JSON.stringify(respuesta[index]));
           */
           

            
            
        }
        
       
       
        
        
        
        
        
              
        
            
        
           
            

           
            

            
            
            

            
            
            
        })
        
        
       
        

        

        



    }
    


userInfo();