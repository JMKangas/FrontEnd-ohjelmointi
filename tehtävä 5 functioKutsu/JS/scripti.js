
var kauttajanLuku;
var arvattavaLuku;

function VertaaLukuja() {

    luvut();

    while (true) {


        if (arvattavaLuku == kauttajanLuku) {

            oikein();
            if(oikein(true)) {
                break;
            }

        } else if (isNaN(kauttajanLuku)) {

            alert("Tarkista syötteesi.")

        }

        kauttajanLuku = prompt("Arvaa luku väliltä 1 - 10");
        Number(kauttajanLuku);

    }
    
}
