let length = 0;
let characterPosition = 0;
let userImage = document.querySelector("#im1");
let characters = [];
let character = {};
let postElements;
let characterPosition2;
let characterPosition3;

function userInfo() {
    characterPosition = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition2 = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition3 = Math.floor(Math.random() * 493 + 1) - 1;
    fetch(`https://rickandmortyapi.com/api/character/[${characterPosition},${characterPosition2},${characterPosition3}]`).then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        
            
        postElements = document.getElementsByClassName('post');
        for (let index = 0; index < postElements.length; index++) {
            //let element = document.getElementsByClassName('image')[index];
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
        
        
        /*
        let detectar = document.getElementsByClassName('post-image');       

            detectar.addEventListener('click', function(){
                localStorage.setItem('character', JSON.stringify(character));
            })*/
        

        

        



    })
    
}

userInfo();




	