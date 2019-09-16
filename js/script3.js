let length = 0;//variable encargada de medir la longitud del array que me devuelve la API para poder iterarse
let character = {};//almacena el objeto del personaje en el DOM
let postElements;//variable que contiene la posicion en el DOM de los cards de los personajes
let characterA;//referencia al espacio en el DOM donde se creara el a href de los personajes
let z;//variable que almacena el codigo para crear un a href
let a;//variable que almacena el codigo para crear un a href
let characterImg//referencia al espacio en el DOM donde se creara el img
let characterFigure;//referencia al espacio en el DOM donde se creara el figure
let characterSpan;//referencia al espacio en el DOM donde se creara el span
let img;//variable encargada de crear el img en el figure contenedor, a travez del ciclo
let span;//variable encargada de crear el span en el a href padre, a travez del ciclo
let figure;//variable encargada de crear figure en el a href padre, a travez del ciclo
let btnNext;//variable que escucha el evento de click para avanzar a la pagina siguiente
let btnPrev;//variable que escucha el evento de click para retroceder a la pagina anterior
let contador;//variable encargada de controlar los indices de la paginacion
let adelante;//variable encargada de almacenar id de la paginacion
let seccion;//contenedor characteres
let characterS;//referencia al contenedor del seccion de la grilla characters
let characterB;//referencia al bnt siguiente
let characterC;//referencia al btn anterior
let characterS2;//referencia al contenedor btns
let section2;//contenedor btns


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
        
        characterA = document.querySelector(".post-list");
        characterFigure = document.querySelector(".post");
        characterSpan = document.querySelector(".post");
        characterImg = document.querySelector(".post-image");        
        length = respuesta.results.length;     
       
        postElements = document.getElementsByClassName('post');

        //ciclo encargado de pintar en pantalla los elementos que nos devuelve la API
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

        //espacio para crear los botones de la paginacion
        characterS2 = document.querySelector("body");
        section2 = document.createElement("section"); 
        section2.setAttribute('class',"btns");
        characterS2.appendChild(section2);

        characterC = document.querySelector(".btns");
        z = document.createElement("a");
        z.setAttribute('href',"#");
        z.setAttribute('class',"prev");
        z.innerHTML = "< Anterior";
        characterC.appendChild(z);

        characterB = document.querySelector(".btns");
        a = document.createElement("a");
        a.setAttribute('href',"#");
        a.setAttribute('class',"next");
        a.innerHTML = "Siguiente >";
        characterB.appendChild(a);       
        

        function quitar(){
            section2 = document.querySelector("section");            
            seccion2 = document.querySelector("body");
            seccion2.removeChild(section2); 

            section = document.querySelector("section");
            seccion = document.querySelector("body");
            seccion.removeChild(section);  

            characterB.removeChild(a);           
            characterC.removeChild(z);            
            
            
        }       
        
          
        btnNext = document.querySelector(".next");
      
            btnNext.addEventListener('click', function(){
                if(contador >= 25){
                    contador--;
                }
                contador++;
                adelante = "?page="+contador;               
      
            quitar();

            userInfo();
        
            
        })
        
        btnPrev = document.querySelector(".prev");
      
            btnPrev.addEventListener('click', function(){
                if(contador <= 1){
                    contador++;
                }
                contador--;
                adelante = "?page="+contador;                
      
            quitar();

            userInfo();
        
            
        })
   
        
        
       
          
        
        
       
        

        

        



    });
    
}

userInfo();
