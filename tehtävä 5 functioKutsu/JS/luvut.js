
let randomNumero, kysymys;

function luvut() {

    randomNumero = Math.floor(Math.random() * 11);

    kysymys = prompt("Arvaa luku väliltä 1 - 10");
    Number(kysymys);

    kauttajanLuku = Number(kysymys);
    arvattavaLuku = randomNumero;
}
