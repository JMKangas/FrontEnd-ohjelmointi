

function VaihdaVaria() {
    
        let variVaihdos = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("boksi").style.backgroundColor = "#" + variVaihdos;

}

function rgbVari() {

        let Punainen = document.getElementById("Red").value;
        let Vihrea = document.getElementById("Green").value;
        let Sininen = document.getElementById("Blue").value;

        document.getElementById("boksi").style.backgroundColor = "rgb(" + Punainen + "," + Vihrea + "," + Sininen + ")";
}
