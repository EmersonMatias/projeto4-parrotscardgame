let nCartas;

let finalizador;

let comparador;

let firstcard;
let secondcard;
let a;
let b;
let c;
let repetirjogo;
let contadorjogadas = 0;
let lockcard = false;
let lockcardfirst;
let lockcardfirst1;


const cartas = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']

let jogo = document.querySelector('.jogo');



function selecao_cartas(){
    nCartas = Number(prompt("Com quantas cartas deseja jogar"));
    finalizador = nCartas/2;

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
}

function posiciona_cartas(){


    let cartas_sortidas = [];

    let cont = 0;

    let mcartas = nCartas/2;

    while( mcartas>cont){
        cartas_sortidas.push(cartas[cont]);
        cartas_sortidas.push(cartas[cont]);
        cont++;
        console.log(cartas_sortidas);
    }

    function comparado() { 
        return Math.random() - 0.5; 
    }
    
    
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

function desativacarta(){
    firstcard.innerHTML = `<img class="back" src="/imagens/${a}">`;

}


function viracarta(cartaclicada){
    lockcardfirst = cartaclicada.innerHTML;
    contadorjogadas++;
    lockcardfirst1 = cartaclicada.querySelector('img').classList.contains('hidden');
    if (lockcard === true) {return false};
    if (lockcardfirst === `<img class="back" src="/imagens/${a}">`) {return false};
    if (lockcardfirst1 === false){return false};
    cartaclicada.classList.add('vira');
    cartaclicada.querySelector('.back').classList.remove('hidden');
    cartaclicada.querySelector('.front').classList.add('hidden');

    if(firstcard === undefined){
        firstcard = cartaclicada;
        a = firstcard.dataset.card;
        console.log(a);
        desativacarta();
        
    }
    else if (secondcard === undefined){
        secondcard = cartaclicada;
        b = secondcard.dataset.card;
        console.log(b);
        lockcard = true;
    }
    console.log(firstcard);
    console.log(secondcard);

    setTimeout(check,1000);

}


function check(){
    if (firstcard !== undefined && secondcard !== undefined){
        c = a === b;
        if(c !== true){
            firstcard.innerHTML = `<img class="back hidden" src="/imagens/${a}">
            <img class="front" src="/imagens/front.png">`
            firstcard.classList.remove('vira');
            firstcard.querySelector('.back').classList.add('hidden');
            firstcard.querySelector('.front').classList.remove('hidden');

            secondcard.classList.remove('vira');
            secondcard.querySelector('.back').classList.add('hidden');
            secondcard.querySelector('.front').classList.remove('hidden');
            firstcard = undefined;
            secondcard = undefined;
            lockcard = false;
            
        }
        else if (c === true){
            firstcard.innerHTML = `<img class="back" src="/imagens/${a}">`
            secondcard.innerHTML = `<img class="back" src="/imagens/${b}">`
            firstcard = undefined;
            secondcard = undefined;
            finalizador--;
            console.log(finalizador);
            lockcard = false;
        }
    
        setTimeout(finalizajogo,1001);
        
        
    }
}

function finalizajogo(){
    if (finalizador === 0){
        alert(`Você ganhou o jogo em ${contadorjogadas} jogadas`);
        repetirjogo = prompt("Você deseja continuar (sim ou não)");

        if(repetirjogo === "sim"){
            jogo.innerHTML = "";
            contadorjogadas = 0;
            finalizador = 0;
            loadgame();
        }
        else{
            alert('O JOGO ACABOU')
        }
    }
}


function loadgame(){
    /*SELEÇÃO DE CARTAS*/ 
    selecao_cartas();

    posiciona_cartas();
    
}
    
loadgame();
















