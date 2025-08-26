// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let barra = document.getElementById('amigo')
    let nuevoAmigo = String(barra.value);
    nuevoAmigo = nuevoAmigo.trim();
    if (nuevoAmigo == ''){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(nuevoAmigo);
    }
    barra.value = '';

    console.log(amigos);
    actualizarAmigos(amigos);
};

function actualizarAmigos(amigos) {
    let espacioLista = document.getElementById('listaAmigos');
    let amigoParaLista = document.createElement('li');
    for (let i = 0; i < amigos.length; i++) {
            amigoParaLista.textContent = amigos[i];
            espacioLista.appendChild(amigoParaLista);
    }
};

function sortearAmigo() {
    let indexEscogido = (Math.floor(Math.random() * amigos.length));
    let espacioResultado = document.getElementById('resultado');
    espacioResultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indexEscogido]}`;
    console.log(amigos[indexEscogido]);

}