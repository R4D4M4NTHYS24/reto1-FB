let length = 0;
let character = {};
let postElements;
let characterPosition;
let characterPosition2;
let characterPosition3;

function userInfo() {
    characterPosition = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition2 = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition3 = Math.floor(Math.random() * 493 + 1) - 1;
    //la escritura ${} se usa para conectar cadenas de texto con variables
    fetch(`https://rickandmortyapi.com/api/character/[${characterPosition},${characterPosition2},${characterPosition3}]`).then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        
            
        postElements = document.getElementsByClassName('post');
        for (let index = 0; index < postElements.length; index++) {          
            let postImage = postElements[index].querySelector('.image');            
            character = respuesta[index];
            postImage.src = character.image;
            
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




	