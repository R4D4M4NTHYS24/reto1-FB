let avatar = document.querySelector("#avatar");

function setDetails() {
    let character=-1;
    if (localStorage.getItem('random1')!== null) {
        character = localStorage.getItem('random1');
    } 
    else if(localStorage.getItem('random2')!== null){
        character = localStorage.getItem('random2');
    }
    else if(localStorage.getItem('random3')!== null){
        character = localStorage.getItem('random3');
    }
    
    avatar.src = 'https://rickandmortyapi.com/api/character/avatar/' + character.toString() +'.jpeg';

}