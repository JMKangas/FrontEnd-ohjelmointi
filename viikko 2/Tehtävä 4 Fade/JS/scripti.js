var FadedOrNot = false;

$(document).ready(function(){
        $("#fade").click(function(){
                
          if (FadedOrNot == false) {

            $(".kuva").fadeTo("slow", 0.5);
            $("#boksi").fadeTo("slow", 0.5);
            
            FadedOrNot = true;

          console.log("succes!");

          } else {
            $(".kuva").fadeTo("slow", 1);
            $("#boksi").fadeTo("slow", 1);
            
            FadedOrNot = false;

          console.log("succes!");
          
          }

        });
      });

$(document).ready(function(){
        $("#nayta").click(function(){
                $(".kuva").show();
              });
});
