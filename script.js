//GET /facts/random?animal_type=cat&amount=2
//*Url info
const baseURL = 'https://pokeapi.co/api/v2/';
const endPoint1 = 'pokemon-shape/1/';
const endPoint2 = 'pokemon-color/2/';
const endPoint3 = 'pokemon-habitat/1/';
const endPoint4 = 'egg-group/1/';
const endPoint5 = 'egg-group/2/';
const endPoint6 = 'egg-group/3/';

//*html variables
const shapeBtn = document.querySelector('#ball');
const colorBtn = document.querySelector('#blue');
const habitatBtn = document.querySelector('#cave');
const monsterBtn = document.querySelector('#MonsterEgg');
const waterBtn = document.querySelector('#waterEgg');
const bugBtn = document.querySelector('#bugEgg');

//* event listeners
shapeBtn.addEventListener('click', FetchShape);
colorBtn.addEventListener('click', FetchColor);
habitatBtn.addEventListener('click', FetchHabitat);
monsterBtn.addEventListener('click', FetchEgg);
waterBtn.addEventListener('click', fetchEggWater);
bugBtn.addEventListener('click', fetchEggBug);

//! shape
function FetchShape (e) {
    fetch (baseURL + endPoint1) 
        .then(res => res.json())
        .then(function (shape) {
            //console.log(shape);
            displayShape (shape.pokemon_species[0].name);
        })
        .catch(err => console.log(err));
}

function displayShape (shape) {
    // console.log(shape);
    let shapePara = document.getElementById('ballPok');
    shapePara.innerText = shape;//*name
    let shapeImg = document.getElementById('ballImg');
    shapeImg.src = "./assets/shellder.png";//*shellder img
}

//! color
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

    //*
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