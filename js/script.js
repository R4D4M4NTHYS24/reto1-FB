let length = 0;
let character = {};
let postElements;
<<<<<<< HEAD
let characterPosition;
=======
>>>>>>> 5c9f8265d0f5af71f3fc6e5016683106e69f517f
let characterPosition2;
let characterPosition3;

function userInfo() {
    characterPosition = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition2 = Math.floor(Math.random() * 493 + 1) - 1;
    characterPosition3 = Math.floor(Math.random() * 493 + 1) - 1;
<<<<<<< HEAD
    //la escritura ${} se usa para conectar cadenas de texto con variables
=======
>>>>>>> 5c9f8265d0f5af71f3fc6e5016683106e69f517f
    fetch(`https://rickandmortyapi.com/api/character/[${characterPosition},${characterPosition2},${characterPosition3}]`).then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        
            
        postElements = document.getElementsByClassName('post');
<<<<<<< HEAD
        for (let index = 0; index < postElements.length; index++) {          
            let postImage = postElements[index].querySelector('.image');            
=======
        for (let index = 0; index < postElements.length; index++) {
            //let element = document.getElementsByClassName('image')[index];
            let postImage = postElements[index].querySelector('.image');
            
>>>>>>> 5c9f8265d0f5af71f3fc6e5016683106e69f517f
            character = respuesta[index];
            postImage.src = character.image;
            
            postElements[index].addEventListener('click', function(){
                console.log("entre");
                console.log(index);
                console.log(character);
                localStorage.setItem('character', JSON.stringify(respuesta[index]));
            });
            
            

            
            
            
        }
        
        
<<<<<<< HEAD
       
=======
        /*
        let detectar = document.getElementsByClassName('post-image');       

            detectar.addEventListener('click', function(){
                localStorage.setItem('character', JSON.stringify(character));
            })*/
>>>>>>> 5c9f8265d0f5af71f3fc6e5016683106e69f517f
        

        

        



    })
    
}

userInfo();




	