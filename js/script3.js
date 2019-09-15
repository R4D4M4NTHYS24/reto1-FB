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
let avanzar;
let adelante;
let seccion;
let section;
let characterS;
let characterB;
let characterC;


contador = 1;
  
adelante = "";
    
function userInfo() {         
    
    fetch(`https://rickandmortyapi.com/api/character/${adelante}`).then((respuesta) => {
        return respuesta.json();
        
    })
    .then((respuesta) => {
        
        characterS = document.querySelector("body");
        section = document.createElement("section"); 
        section.setAttribute('class',"post-list");
        characterS.appendChild(section);
        console.log(characterS);
        
        
        
        characterA = document.querySelector(".post-list");
        characterFigure = document.querySelector(".post");
        characterSpan = document.querySelector(".post");
        characterImg = document.querySelector(".post-image");        
        length = respuesta.results.length; 
      
       
        postElements = document.getElementsByClassName('post');  
        
        
        
        
        for (let index = 0; index < length; index++) { 
                      
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
        //espacio para crear el boton que pagina

        characterB = document.querySelector("body");
        a = document.createElement("a");
        a.setAttribute('href',"#");
        a.setAttribute('class',"next");
        a.innerHTML = "Siguiente";
        characterB.appendChild(a);       
        
        function quitar(){

            section = document.querySelector("section");
            console.log(seccion);
            seccion = document.querySelector("body");
            seccion.removeChild(section);
            characterB.removeChild(a);          
    
        }       
        
          
        btnNext = document.querySelector(".next");
      
            btnNext.addEventListener('click', function(){
            
                contador++;
                adelante = "?page="+contador;
                console.log(adelante);       
                
                console.log("entre");
      
            quitar();

            userInfo();
        
            
        })
   
    
        
       
          
        
        
       
        

        

        



    });
    
}

userInfo();
