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

        
       
        
        
        
        length = respuesta.results.length; 
        
        for (let index = 0; index <= length; index++) {           

                                  
            userImage = document.querySelector(".image");                               
            userImage.appendChild(img);  

            
            
                                  
            
            
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