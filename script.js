
const pMinutos = document.querySelector('.minutos');
const pSegundos = document.querySelector('.segundos');
let interval;

const atualizarParagrafos = function (minutos, segundos) {
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}


const iniciarJogo = function () {
    interval = setInterval(atualizarTimer, 1000);

}

const atualizarTimer = function () {
    let minuto = Number(pMinutos.innerHTML);
    let segundo = Number(pSegundos.innerHTML);

    if (segundo === 0) {
        if (minuto === 0) {
            clearInterval(interval);
            //clearTimeout(valor)
        }
        else {
            minuto--;
            segundo = 59;
        }

    }
    else {
        segundo--;
    }

    
    atualizarParagrafos(minuto, segundo);
}

// setTimeout(atualizarTime, 1000);

let button = document.querySelector("#button")

button.onclick = iniciarJogo 



