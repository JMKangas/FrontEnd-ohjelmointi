

function VaihdaVaria() {
    
        let variVaihdos = Math.floor(Math.random()*16777215).toString(16);
        let variVaihdos2 = Math.floor(Math.random()*16777215).toString(16);
        let variVaihdos3 = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("boksi").style.backgroundColor = "#" + variVaihdos;
        document.getElementById("boksi1").style.backgroundColor = "#" + variVaihdos2;
        document.getElementById("boksi2").style.backgroundColor = "#" + variVaihdos3;
       
}

$(document).ready(function(){
        $("#vari").click(function(){
          VaihdaVaria();
        });
      });

function reload() {

        location.reload();

}

$(document).ready(function(){
        $("#piilota").click(function(){
                $(".kuva").hide();
              });
});

$(document).ready(function(){
        $("#nayta").click(function(){
                $(".kuva").show();
              });
});
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "img/pic1";