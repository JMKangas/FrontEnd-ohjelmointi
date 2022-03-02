
let tilanne = false

$(document).ready(function(){

  $(".nauta").click(function(){
    
    if(tilanne == false) {

      january();
      february();
      march();
      april();
      may();
      june();
      july();
      august();
      september();
      october();
      november();
      december();

    tilanne = true;

    } else {

      $(document).click(function() {
        location.reload();
        tilanne = false;
    });

    }

  });

});

function january() {

  document.getElementById("tammi").style.backgroundColor = "#1f3864"; 
  document.getElementById("tammiP").innerHTML = "Tammikuu -14,8°C";

  $("#tammi").animate({

    width: "350px"

  });

}

function february() {

  document.getElementById("helmi").style.backgroundColor = "#1f3b6e";
  document.getElementById("helmiP").innerHTML = "Helmikuu -11,7°C"; 

  $("#helmi").animate({

    width: "390px"
  
  });

}

function march() {

  document.getElementById("maalis").style.backgroundColor = "#2f5597"; 
  document.getElementById("maalisP").innerHTML = "Maaliskuu -9,6°C";

  $("#maalis").animate({ 
    
    width: "412px"
  
  });
}

function april() {

  document.getElementById("huhti").style.backgroundColor = "#fff2cc"; 
  document.getElementById("huhtiP").innerHTML = "Huhtikuu -4,9°C";
  document.getElementById("huhti").style.color = "black";

  $("#huhti").animate({

    width: "445px"
  
  });

}

function may() {

  document.getElementById("touko").style.backgroundColor = "#f4b183"; 
  document.getElementById("toukoP").innerHTML = "Toukokuu +6°C";
  document.getElementById("touko").style.color = "black";

  $("#touko").animate({

    width: "530px"
  
  });

}

function june() {

  document.getElementById("kesa").style.backgroundColor = "#c55a11"; 
  document.getElementById("kesaP").innerHTML = "Kesakuu 15,5°C";

  $("#kesa").animate({

    width: "625px"
  
  });

}

function july() {

  document.getElementById("heina").style.backgroundColor = "#ff0000"; 
  document.getElementById("heinaP").innerHTML = "Heinakuu +13,4°C";

  $("#heina").animate({

    width: "604px"
  
  });

}

function august() {

  document.getElementById("elo").style.backgroundColor = "#c00000";
  document.getElementById("eloP").innerHTML = "Elokuu +12,6°C"; 

  $("#elo").animate({

    width: "595px"
  
  });

}

function september() {

  document.getElementById("syys").style.backgroundColor = "#e69965"; 
  document.getElementById("syysP").innerHTML = "Syyskuu +8,2°C";

  $("#syys").animate({

    width: "554px"
  
  });

}

function october() {

  document.getElementById("loka").style.backgroundColor = "#f2e2b3"; 
  document.getElementById("lokaP").innerHTML = "Lokakuu -1,8°C";
  document.getElementById("loka").style.color = "black";

  $("#loka").animate({

    width: "475px"
  
  });

}

function november() {

  document.getElementById("marras").style.backgroundColor = "#f7e9be"; 
  document.getElementById("marrasP").innerHTML = "Marraskuu -3,9°C";
  document.getElementById("marras").style.color = "black";

  $("#marras").animate({

    width: "455px"
  
  });

}

function december() {

  document.getElementById("joulu").style.backgroundColor = "#062152"; 
  document.getElementById("jouluP").innerHTML = "Joulukuu -32,6°C";

  $("#joulu").animate({

    width: "300px"
  
  });

}
