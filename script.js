//GET /facts/random?animal_type=cat&amount=2
//*Url info
const baseURL = 'https://pokeapi.co/api/v2/';
const endPoint1 = 'pokemon-shape/1/';
const endPoint2 = 'pokemon-color/2/';
const endPoint3 = 'pokemon-habitat/1/';
const endPoint4 = 'egg-group/1/';
const endPoint5 = 'egg-group/2/';
const endPoint6 = 'egg-group/3/';
const endPoint7 = 'pokemon-shape/2/';
const endPoint8 = 'pokemon-shape/3/';
const endPoint9 = 'pokemon-color/5/';//8

//*html variables
const shapeBtn = document.querySelector('#ball');
const colorBtn = document.querySelector('#blue');
const habitatBtn = document.querySelector('#cave');
const monsterBtn = document.querySelector('#MonsterEgg');
const waterBtn = document.querySelector('#waterEgg');
const bugBtn = document.querySelector('#bugEgg');
const squiggleBtn = document.querySelector('#squiggle');
const fishBtn = document.querySelector('#fish');
const greenBtn = document.querySelector('#green');

//* event listeners
shapeBtn.addEventListener('click', FetchShape);
colorBtn.addEventListener('click', FetchColor);
habitatBtn.addEventListener('click', FetchHabitat);
monsterBtn.addEventListener('click', FetchEgg);
waterBtn.addEventListener('click', fetchEggWater);
bugBtn.addEventListener('click', fetchEggBug);
squiggleBtn.addEventListener('click', FetchSquiggle);
fishBtn.addEventListener('click', FetchFish);
greenBtn.addEventListener('click', FetchGreen);

// ! Rando num func ==== inefficient
// function randomInt (max) {
//     return Math.floor(Math.random() * max);
//    }

//! shape
    //*ball

function FetchShape (e) {
    fetch (baseURL + endPoint1) 
        .then(res => res.json())
        .then(function (shape) {
            // console.log(shape);
            displayShape (shape);
        })
        .catch(err => console.log(err));
}

let ballArray = ["./assets/shellder.png", "./assets/Gastly.png", "./assets/voltorb.png", "./assets/koffing.png"];

function displayShape (shape) {
    // console.log(shape);
    let rando = Math.floor(Math.random() * 4);
    let shapePara = document.getElementById('ballPok');
    shapePara.innerText = shape.pokemon_species[rando].name;//*name
    let shapeImg = document.getElementById('ballImg');
    shapeImg.src = ballArray[rando];
    // ! does not work
    // let current = shape.pokemon_species.indexOf(pokemon_species);
    // if (current === 0) {
    //     shapeImg.src = "./assets/shellder.png";
    // } else if (current === 1) {
    //     shapeImg.src = "./assets/Gastly.png";
    // } else if (current === 3) {
    //     shapeImg.src = "./assets/koffing";
    // } else {
    //     shapeImg.src = "./assets/voltorb.png";
    // }
    
}

//* Squiggle
function FetchSquiggle (e) {
    fetch (baseURL + endPoint7)
        .then(res => res.json())
        .then(function(squiggle) {
            // console.log(squiggle);
            displaySquiggle(squiggle);
        })
        .catch(err => console.log(err));
}

let squig = ["./assets/ekans.png", "./assets/caterpie.png", "./assets/kakuna.jpg", "./assets/ekans.png", "./assets/onix.jpg"];

function displaySquiggle (shape) {
    let rando = Math.floor(Math.random() * 5);
    let squigglePara = document.getElementById('squigglePok');
    squigglePara.innerText = shape.pokemon_species[rando].name;
    let squiggleImg = document.getElementById('squiggleImg');
    squiggleImg.src = squig[rando];
}

//* Fish
function FetchFish (e) { 
    fetch (baseURL + endPoint8)
        .then(res => res.json())
        .then(function (fish) {
            // console.log(fish);
            displayFish(fish);
        })
} 

let fish = ["./assets/seel.png", "./assets/goldeen.png", "./assets/magikarp.png", "./assets/lapras.png"];

function displayFish (shape) {
    let rando = Math.floor(Math.random() * 4);
    let fishPara = document.getElementById('fishPok');
    fishPara.innerText = shape.pokemon_species[rando].name;
    let fishImg = document.getElementById('fishImg');
    fishImg.src = fish[rando];
}

//! color
    //* Blue
function FetchColor (e) {
     fetch (baseURL + endPoint2)
        .then(res => res.json())
        .then(function (color) {
            //console.log(color);
            displayColor(color.pokemon_species[0].name);
        })
        .catch(err => console.log(err));
}
   
function displayColor (color) {
    // console.log(color);
    let colorPara = document.getElementById('bluePok');
    colorPara.innerText = color;//* color
    let colorImg = document.getElementById('blueImg');
    colorImg.src = "./assets/squirtle.jpg";//* squirtle img
}

    //* Green
function FetchGreen (e) {  
    fetch (baseURL + endPoint9)
        .then (res => res.json())
        .then (function (color) {
            console.log(color);
            displayGreen(color.pokemon_species[8].name);
        }) 
        .catch(err => console.log(err));
}

function displayGreen (green) {
    let greenPara = document.getElementById('greenPok');
    greenPara.innerText = green;
    let greenImg = document.getElementById('greenImg');
    greenImg.src = "./assets/chikorita.png";
}

//! habitat
function FetchHabitat (e) {
    fetch (baseURL + endPoint3)
        .then(res => res.json())
        .then(function (habitat) {
            //console.log(habitat);
            displayHabitat(habitat.pokemon_species[0].name);
        })
        .catch(err => console.log(err));
}

function displayHabitat (habitat) {
    //console.log(habitat);
    let habitatPara = document.getElementById('cavePok');
    habitatPara.innerText = habitat;
    let habitatImg = document.getElementById('caveImg');
    habitatImg.src = "./assets/zubat.png";
}

//! Eggs 
    //*monster
function FetchEgg (e) {
    fetch (baseURL + endPoint4)
        .then(res => res.json())
        .then(function (egg) {
            //console.log(egg);
            displayMonster(egg.pokemon_species[0].name);
        })
        .catch(err => console.log(err));
}

function displayMonster (monster) {
    let monsterPara = document.getElementById('monsterPok');
    monsterPara.innerText = monster;
    let monsterImg = document.getElementById('monsterImg');
    monsterImg.src = "./assets/bulbasaur.jpg";
}

    //*water
function fetchEggWater (water) {
    fetch (baseURL + endPoint5)
        .then(res => res.json())
        .then(function (egg) {
            //console.log(egg);
            displayWater(egg.pokemon_species[3].name);
        })
        .catch(err => console.log(err));
}

function displayWater (water) {
    let waterPara = document.getElementById('waterPok');
    waterPara.innerText = water;
    let waterImg = document.getElementById('waterImg');
    waterImg.src = "./assets/psyduck.png";
}

    //* Bug
function fetchEggBug (e) {
    fetch(baseURL + endPoint6)
     .then(res => res.json())
     .then(function (egg) {
         //console.log(egg);
         displayBug(egg.pokemon_species[0].name);
     })
     .catch(err => console.log(err));
    }

function displayBug (bug) {
    let bugPara = document.getElementById('bugPok');
    bugPara.innerText = bug;
    let bugImg = document.getElementById('bugImg');
    bugImg.src = "./assets/caterpie.png";
}

//! natures
    //* Bold
    
        