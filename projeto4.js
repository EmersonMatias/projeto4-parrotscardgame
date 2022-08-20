let nCartas = Number(prompt("Com quantas cartas deseja jogar"));

let finalizador = nCartas/2;

let comparador;

if ((nCartas%2) === 0 && nCartas > 3 && nCartas < 15 ){
    alert(comparador = true);
}
else{
    alert(comparador = false);
}

while(comparador === false){
    nCartas = Number(prompt("Com quantas cartas deseja jogar"));

    if ((nCartas%2) === 0 && nCartas > 3 && nCartas < 15 ){
        alert(comparador = true);
    }
    else{
        alert(comparador = false);
    }
    alert(comparador);
}


const cartas = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']

let jogo = document.querySelector('.jogo');

function comparado() { 
    return Math.random() - 0.5; 
}


let cartas_sortidas = [];

let cont = 0;

let mcartas = nCartas/2;

while( mcartas>cont){
    cartas_sortidas.push(cartas[cont]);
    cartas_sortidas.push(cartas[cont]);
    cont++;
    console.log(cartas_sortidas);
}

let firstcard;
let secondcard;
let a;
let b;
let c;

function viracarta(cartaclicada){
    cartaclicada.classList.add('vira');
    cartaclicada.querySelector('.back').classList.remove('hidden');
    cartaclicada.querySelector('.front').classList.add('hidden');

    if(firstcard === undefined){
        firstcard = cartaclicada;
        a = firstcard.dataset.card;
        console.log(a);
    }
    else if (secondcard === undefined){
        secondcard = cartaclicada;
        b = secondcard.dataset.card;
        console.log(b);
    }
    console.log(firstcard);
    console.log(secondcard);

    
    setTimeout(check,1000);
    setTimeout(finalizajogo,1001);
    
    
    
  
}



function check(){
    if (firstcard !== undefined && secondcard !== undefined){
        c = a === b;
        if(c !== true){
            firstcard.classList.remove('vira');
            firstcard.querySelector('.back').classList.add('hidden');
            firstcard.querySelector('.front').classList.remove('hidden');

            secondcard.classList.remove('vira');
            secondcard.querySelector('.back').classList.add('hidden');
            secondcard.querySelector('.front').classList.remove('hidden');
            firstcard = undefined;
            secondcard = undefined;
        }
        else if (c === true){
            firstcard = undefined;
            secondcard = undefined;
            finalizador--;
            console.log(finalizador);
        }
    }

}

function finalizajogo(){
    if (finalizador === 0){
        alert('você ganhou!')
    }
}


function loadgame(){
    

    
    cartas_sortidas = cartas_sortidas.sort(comparado);
    console.log(cartas_sortidas);


    let contador = 0;

    while ( nCartas > contador){
        jogo.innerHTML = jogo.innerHTML +
    `<div class="cards" onclick="viracarta(this)" data-card="${cartas_sortidas[contador]}">
        <img class="back hidden" src="/imagens/${cartas_sortidas[contador]}">
        <img class="front" src="/imagens/front.png">
    </div>`
    contador++
}
    


    }
    
    

loadgame();














