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
let figure;
let btnNext;
let contador;
let flag;
let postImage;








function userInfo() {
   
    fetch('https://rickandmortyapi.com/api/character/').then((respuesta) => {
        return respuesta.json();
        
    })
    .then((respuesta) => {

        
       
        
        characterA = document.querySelector(".post-list");
        characterFigure = document.querySelector(".post");
        characterSpan = document.querySelector(".post");
        characterImg = document.querySelector(".post-image");        
        length = respuesta.results.length; 
        //flag = false;
       
        postElements = document.getElementsByClassName('post');  
        
        precarga();
        function precarga(){
        for (let index = 0; index < length; index++) { 
                              
            contador = 1;      
            if(index == 1){
                contador++;
                console.log(contador);
            }
          
            
            a = document.createElement("a");
            figure = document.createElement("figure"); 
            span = document.createElement("span"); 
            img = document.createElement("img");
                                 
            a.setAttribute('href',"details.html");
            a.setAttribute('class',"post");

            characterA.appendChild(a);

            figure.setAttribute('class',"post-image"); 

            span.setAttribute('class',"post-overlay"); 

            a.appendChild(figure);
            a.appendChild(span);      
            
            character = respuesta.results[index]; 
                                
            img.setAttribute('class',"image"); 
            img.setAttribute('src',`${character.image}`);             
               
            figure.appendChild(img);          
            
                
                     
            postElements[index].addEventListener('click', function(){
              
                localStorage.setItem('character', JSON.stringify(respuesta.results[index]));
            })      
            
           
           
            
            
        }
    }
        
        /*
        btnNext = document.querySelector(".next");
        console.log(contador);
        btnNext.addEventListener('click', function(){
            results=respuesta.next;
            console.log(results);
            precarga(results);
            contador++;
            console.log("entre");
            console.log(index);
            console.log(character);
            
        })
         */   
        
        
       
        

        

        



    });
    
}

userInfo();