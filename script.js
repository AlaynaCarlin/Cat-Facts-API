//GET /facts/random?animal_type=cat&amount=2
const baseURL = '';
//const endPoint = 'https:/facts/random/&amount3';

fetch ('https://pokeapi.co/api/v2/pokemon/{id}')
    .then(res => res.json())
    .then(console.log);

