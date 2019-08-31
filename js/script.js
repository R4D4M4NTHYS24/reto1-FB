let length = 0;
let random = -1;
let userImage = document.querySelector("#im1");
let characters = [];

function userInfo() {
    fetch('https://rickandmortyapi.com/api/character').then((respuesta) => {
        return respuesta.json();
    })
    .then((respuesta) => {
        /*console.log(respuesta);
        characters.push(respuesta.results);
        console.log(respuesta.info.next);
        fetch('https://rickandmortyapi.com/api/character/?page=16').then((respuesta)=>{
            return respuesta;
        })
        characters.push(respuesta.results);
        console.log(respuesta);*/
        length = respuesta.results.length;
        userImage = document.querySelector("#im1");
        random = Math.floor(Math.random()*length + 1);
        userImage.src = 'https://rickandmortyapi.com/api/character/avatar/' + random.toString() +'.jpeg';
        localStorage.setItem('random1', random);
        userImage.addEventListener('click', change(1));
        userImage = document.querySelector("#im2");
        random = Math.floor(Math.random()*length + 1);
        userImage.src = 'https://rickandmortyapi.com/api/character/avatar/' + random.toString() +'.jpeg';
        localStorage.setItem('random2', random);
        userImage.addEventListener('click', change(2));
        userImage = document.querySelector("#im3");
        random = Math.floor(Math.random()*length + 1);
        userImage.src = 'https://rickandmortyapi.com/api/character/avatar/' + random.toString() +'.jpeg';
        localStorage.setItem('random3', random);
        userImage.addEventListener('click', change(3));
    })
}
userInfo();
//change();

function change(number) {
    console.log(number);
    if(number == 1){
        console.log(localStorage.getItem('random1'));
        localStorage.setItem('random2', null);
        localStorage.setItem('random3', null);
    }
    else if (number== 2){
        console.log(localStorage.getItem('random2'));
        localStorage.setItem('random1', null);
        localStorage.setItem('random3', null);
    }
    else if (number== 3){
        localStorage.setItem('random1', null);
        localStorage.setItem('random2', null);
        console.log(localStorage.getItem('random3'));
    }
}	