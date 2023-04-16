const keyAPI = 6166529580129196;
const baseURL = "https://www.superheroapi.com/api.php/";
let url1 = [`${baseURL}/${keyAPI}/${Math.round(Math.random() * 731) + 1}`]
let url2 = [`${baseURL}/${keyAPI}/${Math.round(Math.random() * 731) + 1}`]

let personagens1 = []
let personagens2 = []

window.onload = function(){
    this.montaCard1();
    this.montaCard2();
}

url1.forEach(function(url){
    fetch(url)
        .then((response)=>response.json())
        .then(function(data){
            personagens1.push(data);
            if(personagens1.length == 1){
                montaCard1()
            }
        })
})
url2.forEach(function(url){
    fetch(url)
        .then((response)=>response.json())
        .then(function(data){
            personagens2.push(data);
            if(personagens2.length == 1){
                montaCard2()
            }
        })
})

function montaCard1(){
    let card1 = document.querySelector('#hero1');
    personagens1.forEach(function(p){
        card1.innerHTML += `<div class= 'cardHero'>
        <img src= '${p.image.url}'/>
        <p>Nome: <span>${p.name}</span></p>
        <p>Durability: <span>${p.powerstats.durability}</span></p>
        <p>Power: <span>${p.powerstats.power}</span></p>
        <p>Strength: <span>${p.powerstats.strength}</span></p>
        <p>Combat: <span>${p.powerstats.combat}</span></p>
        <p>Intelligence: <span>${p.powerstats.intelligence}</span></p>
        <p>Speed: <span>${p.powerstats.speed}</span></p>
        </div>`
    });
}
function montaCard2(){
    let card2 = document.querySelector('#hero2');
    personagens2.forEach(function(p){
    card2.innerHTML += `<div class= 'cardHero'>
    <img src= '${p.image.url}'/>
    <p>Nome: <span>${p.name}</span></p>
    <p>Durability: <span>${p.powerstats.durability}</span></p>
    <p>Power: <span>${p.powerstats.power}</span></p>
    <p>Strength: <span>${p.powerstats.strength}</span></p>
    <p>Combat: <span>${p.powerstats.combat}</span></p>
    <p>Intelligence: <span>${p.powerstats.intelligence}</span></p>
    <p>Speed: <span>${p.powerstats.speed}</span></p>
    </div>`
    });

    let media1 = (personagens1[0].powerstats.durability + personagens1[0].powerstats.power + personagens1[0].powerstats.strength + personagens1[0].powerstats.combat + personagens1[0].powerstats.intelligence + personagens1[0].powerstats.speed)/6;
    let media2 = (personagens2[0].powerstats.durability + personagens2[0].powerstats.power + personagens2[0].powerstats.strength + personagens2[0].powerstats.combat + personagens2[0].powerstats.intelligence + personagens2[0].powerstats.speed)/6;

    if(media1 > media2){
        let winner1 = document.querySelector('#winner');
        winner1.innerHTML += `<span>Vencedor(a) ${personagens1[0].name}</span>`
    }else{
        let winner2 = document.querySelector('#winner');
        winner2.innerHTML += `<span>Vencedor(a) ${personagens2[0].name}</span>`
    }
}