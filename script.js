//GET /facts/random?animal_type=cat&amount=2
//*Url info
const baseURL = 'https://pokeapi.co/api/v2/';
const endPoint1 = 'pokemon-shape/1/';
const endPoint2 = 'pokemon-color/2/';
const endPoint3 = 'pokemon-habitat/1/'

//*html variables
const shapeBtn = document.querySelector('#ball');
const colorBtn = document.querySelector('#blue');
const habitatBtn = document.querySelector('#cave');

//* event listeners
shapeBtn.addEventListener('click', FetchShape);
colorBtn.addEventListener('click', FetchColor);
habitatBtn.addEventListener('click', FetchHabitat);

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

