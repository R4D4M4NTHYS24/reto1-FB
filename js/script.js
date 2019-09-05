let length = 0;
let characterPosition = 0;
let userImage = document.querySelector("#im1");
let characters = [];
let character = {};
let elements;

function userInfo() {
    fetch('https://rickandmortyapi.com/api/character').then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        
        serviceLength = respuesta.results.length;        
        elements = document.getElementsByClassName('post');
        for (let index = 0; index < elements.length; index++) {
            let element = document.getElementsByClassName('image')[index];
            characterPosition = Math.floor(Math.random() * serviceLength + 1) - 1;
            character = respuesta.results[characterPosition];
            element.src = character.image;

            
            
            
        }
        //console.log("hola")
        localStorage.setItem('character', JSON.stringify(character));
        /*
        let detectar = document.getElementsByClassName('post-image');       

            detectar.addEventListener('click', function(){
                localStorage.setItem('character', JSON.stringify(character));
            })*/
        

        

        



    })
    
}

userInfo();




	