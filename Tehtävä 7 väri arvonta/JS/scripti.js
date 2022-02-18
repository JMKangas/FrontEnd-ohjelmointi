

function VaihdaVaria() {
    
        let variVaihdos = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("boksi").style.backgroundColor = "#" + variVaihdos;

}
