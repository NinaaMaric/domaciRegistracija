let ide = 1;

$(document).ready(function() {
    $(".btn-popUpBtnO").on("click", function(event) {
        event.preventDefault();
        let skola = $("#skola").val();
        let stepen = $("#stepen").val();
        let drzavaO = $("#izaberiDrzavuPopup2").val();
        let gradO = $("#izaberiGradPopup2").val();
        let mjesecPocetakO = $("#mjesecPocetakO").val();
        let godinaPocetakO = $("#godinaPocetakO").val();
        let pocetakO = mjesecPocetakO + " " + godinaPocetakO;
        let mjesecZavrsetakO = $("#mjesecZavrsetakO").val();
        let godinaZavrsetkaO = $("#godinaZavrsetakO").val();
        let zavrsetakO = mjesecZavrsetakO + " " + godinaZavrsetkaO;
      
        if (godinaPocetakO > godinaZavrsetkaO) {
          alert(
            "Godina početka je veća od godine završetka! Molimo unesite adekvatne podatke"
          );
          return;
        }
        if (
          mjesecPocetakO >= mjesecZavrsetakO &&
          godinaPocetakO == godinaZavrsetkaO
        ) {
          alert(
            "Mjesec početka je veći od mjeseca završetka! Molimo unesite adekvatne podatke"
          );
          return;
        }
      
        $(
          "<div class='RightBx py-2 px-2' style='cursor: pointer' id=" + "'" + ide + "'" + ">"  +
            "<div class='wrapp2'>" +
            "<h5 style='color: rgb(241, 89, 41)'>" +
            skola +
            "</h5>" +
            "<h5 style='font-weight: bold'>" +
            pocetakO +
            " - " +
            zavrsetakO +
            "</h5>" +
            "<p>" +
            stepen +
            " </p>" +
            "<p>" +
            gradO +
            ", " +
            drzavaO +
            "</p>" +
            "<p style='color: rgb(241, 89, 41); text-align: center; text-decoration: underline; padding-top: 10px' data-toggle='modal' data-target='#bd-example-modal-lg'> Uredi informacije</p>" +
            "</div></div>"
        ).appendTo($("#output2"));
      });
     
    $(".modal").on("hidden.bs.modal", function() {
        console.log('dddddd')
        $(".modal-body-dva").find("input,textarea").val("");
        $("#izaberiDrzavuPopup2")
        .val("default")
        .selectpicker("deselectAll");
      $("#izaberiDrzavuPopup2").selectpicker({
        noneSelectedText: "Odaberi"
      });
      $("#izaberiDrzavuPopup2").selectpicker("refresh");
  
      $("#izaberiGradPopupF")
        .val("default")
        .selectpicker("deselectAll");
      $("#izaberiGradPopupF").selectpicker({
        noneSelectedText: "Odaberi"
      });
      $("#izaberiGradPopup2").selectpicker("refresh");
  
      $("#mjesecPocetakO")
        .val("default")
        .selectpicker("deselectAll");
      $("#mjesecPocetakO").selectpicker({
        noneSelectedText: "Mjesec"
      });
      $("#mjesecPocetakO").selectpicker("refresh");
  
      $("#mjesecZavrsetakO")
        .val("default")
        .selectpicker("deselectAll");
      $("#mjesecZavrsetakO").selectpicker({
        noneSelectedText: "Mjesec"
      });
      $("#mjesecZavrsetakO").selectpicker("refresh");
  
      $("#godinaPocetakO")
        .val("default")
        .selectpicker("deselectAll");
      $("#godinaPocetakO").selectpicker({
        noneSelectedText: "Godina"
      });
      $("#godinaPocetakO").selectpicker("refresh");
  
      $("#godinaZavrsetakO")
        .val("default")
        .selectpicker("deselectAll");
      $("#godinaZavrsetakO").selectpicker({
        noneSelectedText: "Godina"
      });
      $("#godinaZavrsetakO").selectpicker("refresh");

      $("#dugmeObrazovanje").html(
       '<button class="btn btn-popUpBtn" type="submit" id="izmijeniO" onclick="obrazovanje1()" data-dismiss="modal"><img src="img/icons/plus.png" alt="plus" class="plus"> Izmijeni</button>'
      );
    });
    });
  function obrazovanje1(){
        event.preventDefault();
        let skola = $("#skola").val();
        let stepen = $("#stepen").val();
        let drzavaO = $("#izaberiDrzavuPopup2").val();
        let gradO = $("#izaberiGradPopup2").val();
        let mjesecPocetakO = $("#mjesecPocetakO").val();
        let godinaPocetakO = $("#godinaPocetakO").val();
        let pocetakO = mjesecPocetakO + " " + godinaPocetakO;
        let mjesecZavrsetakO = $("#mjesecZavrsetakO").val();
        let godinaZavrsetkaO = $("#godinaZavrsetakO").val();
        let zavrsetakO = mjesecZavrsetakO + " " + godinaZavrsetkaO;
      
        if (godinaPocetakO > godinaZavrsetkaO) {
          alert(
            "Godina početka je veća od godine završetka! Molimo unesite adekvatne podatke"
          );
          return;
        }
        if (
          mjesecPocetakO >= mjesecZavrsetakO &&
          godinaPocetakO == godinaZavrsetkaO
        ) {
          alert(
            "Mjesec početka je veći od mjeseca završetka! Molimo unesite adekvatne podatke"
          );
          return;
        }
        document.getElementById(ide).style.display = "none";
        console.log(ide);
        ide++
      
        $(
          "<div class='RightBx py-2 px-2' style='cursor: pointer' id=" + "'" + ide + "'" + ">" +
            "<div class='wrapp2'>" +
            "<h5 style='color: rgb(241, 89, 41)'>" +
            skola +
            "</h5>" +
            "<h5 style='font-weight: bold'>" +
            pocetakO +
            " - " +
            zavrsetakO +
            "</h5>" +
            "<p>" +
            stepen +
            " </p>" +
            "<p>" +
            gradO +
            ", " +
            drzavaO +
            "</p>" +
            "<p style='color: rgb(241, 89, 41); text-align: center; text-decoration: underline; padding-top: 10px' data-toggle='modal' data-target='#modalIskustvo'> Uredi informacije</p>" +
            "</div></div>"
        ).appendTo($("#output2"));
    } 
