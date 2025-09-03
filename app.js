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
    actualizarAmigos(amigos);
};

function actualizarAmigos(amigos) {
    let espacioLista = document.getElementById('listaAmigos');
    espacioLista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
            let amigoParaLista = document.createElement('li');
            amigoParaLista.textContent = amigos[i];
            espacioLista.appendChild(amigoParaLista);
    }
};

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Agrega al menos un amigo antes de sortear");
        return;
    }
    let indexEscogido = (Math.floor(Math.random() * amigos.length));
    let espacioResultado = document.getElementById('resultado');
    let espacioLista = document.getElementById('listaAmigos');
    espacioLista.innerHTML = '';
    espacioResultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indexEscogido]}`;
    amigos = [];
}
