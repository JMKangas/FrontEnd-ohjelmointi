
function Saa() {

        var kysymys = prompt("Anna tuulennopeus (m/s).");

        var lampotila = Number(kysymys);
    
        if (lampotila < 1) {

            alert("Tyyntä");

        } else if (lampotila >= 1 && lampotila <=3) {

            alert("Heikkoa tuulta")

        } else if (lampotila >= 4 && lampotila <=7) {

            alert("Kohtalaista tuulta")

        } else if (lampotila >= 8 && lampotila <=13) {

            alert("Navakkaa tuulta")

        } else if (lampotila >= 14 && lampotila <=20) {

            alert("Kovaa tuulta")

        } else if (lampotila >= 21 && lampotila <=32) {

            alert("Myrskyä")

        } else if (lampotila >= 33) {

            alert("Hirmu myrsky. Keitä kahvit ja pysy kotona")

        } else if (isNaN(lampotila)) {

            alert("Tarkasta syötteesi. Käytä pelkkiä numeroita.")

        }
}
