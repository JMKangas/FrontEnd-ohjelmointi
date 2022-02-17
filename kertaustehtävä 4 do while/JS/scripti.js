
function Numero() {

    var randomNumero = Math.floor(Math.random() * 11);
    Number(randomNumero);

    while (true) {

        var kysymys = prompt("Arvaa numero");

            if (randomNumero == Number(kysymys)) {

                alert("Oikein meni! Onneksi olkoon!")
                break;

            } else if (isNaN(Number(kysymys))) {
                alert("Vain numeroita 1 - 10");

            } else if (Number(kysymys) > 10) {

                alert("Liian suuri numero.");

            } else if (randomNumero >= 1 && randomNumero <=10 && randomNumero != Number(kysymys)) {

                alert("Väärin! Yritä uudelleen!");

            }
    }

}
