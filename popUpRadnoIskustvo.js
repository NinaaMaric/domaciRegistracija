let idd = 1;

$(document).ready(function() {
    $(".btn-popUpBtn").on("click", function(event) {
      console.log("test");
      event.preventDefault();
  
      let pozicija = $("#pozicija").val();
      let poslodavac = $("#poslodavac").val();
      let pocetakMjesec = $("#mjesecP").val();
      let pocetakGodina = $("#godinaP").val();
      let pocetak = pocetakMjesec + " " + pocetakGodina;
      let zavrsetakMjesec = $("#mjesecZ").val();
      let zavesetakGodina = $("#godinaZ").val();
      let zavrsetak = zavrsetakMjesec + " " + zavesetakGodina;
      let grad = $("#izaberiGradPopupF").val();
      let drzava = $("#izaberiDrzavuPopupF").val();
      let opis = $("#textArea1").val();
      let radimTrenutno = $("#radimTrenutno").is(":checked");
  
      if (pocetakGodina > zavesetakGodina && !radimTrenutno) {
        alert(
          "Godina početka je veća od godine završetka! Molimo unesite adekvatne podatke"
        );
        return;
      }
      if (
        pocetakMjesec >= zavrsetakMjesec &&
        pocetakGodina == zavesetakGodina &&
        !radimTrenutno
      ) {
        alert(
          "Mjesec početka je veći od mjeseca završetka! Molimo unesite adekvatne podatke"
        );
        return;
      }
  
      $(
        "<div class='leftBx py-1 px-1' style='cursor: pointer' id=" + "'" + idd + "'" + ">" +
          "<div class='wrapp'>" +
          "<h5 style='color: rgb(241, 89, 41)'>" +
          pozicija +
          "</h5>" +
          "<h5 style='font-weight: bold'>" +
          pocetak +
          " - " +
          zavrsetak +
          "</h5>" +
          "<p>" +
          poslodavac +
          " </p>" +
          "<p>" +
          grad +
          ", " +
          drzava +
          "</p>" +
          "<div class='accordion' id='accordionExample' style='background: white>" +
          "<div class='card-header' id='headingOne'>" +
          "<h5 class='opisPosla' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'> Opis posla: <img src='img/icons/arrow2.png' class='arrow'> </h5>" +
          "<div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>" +
          "<hr>" +
          opis +
          "<p style='color: rgb(241, 89, 41); text-align: center; text-decoration: underline; padding-top: 30px' data-toggle='modal' data-target='#modalIskustvo'> Uredi informacije </p>" +
          "</div>" +
          "</div>" +
          "</div></div></div>"
      ).appendTo($("#output"));
  
    
    });

    $(".modal").on("hidden.bs.modal", function() {
        console.log('dddddd')
        $(".modal-body-dva").find("input,textarea").val("");
        $("#izaberiDrzavuPopupF")
        .val("default")
        .selectpicker("deselectAll");
      $("#izaberiDrzavuPopupF").selectpicker({
        noneSelectedText: "Odaberi"
      });
      $("#izaberiDrzavuPopupF").selectpicker("refresh");
  
      $("#izaberiGradPopupF")
        .val("default")
        .selectpicker("deselectAll");
      $("#izaberiGradPopupF").selectpicker({
        noneSelectedText: "Odaberi"
      });
      $("#izaberiGradPopupF").selectpicker("refresh");
  
      $("#mjesecP")
        .val("default")
        .selectpicker("deselectAll");
      $("#mjesecP").selectpicker({
        noneSelectedText: "Mjesec"
      });
      $("#mjesecP").selectpicker("refresh");
  
      $("#mjesecZ")
        .val("default")
        .selectpicker("deselectAll");
      $("#mjesecZ").selectpicker({
        noneSelectedText: "Mjesec"
      });
      $("#mjesecZ").selectpicker("refresh");
  
      $("#godinaP")
        .val("default")
        .selectpicker("deselectAll");
      $("#godinaP").selectpicker({
        noneSelectedText: "Godina"
      });
      $("#godinaP").selectpicker("refresh");
  
      $("#godinaZ")
        .val("default")
        .selectpicker("deselectAll");
      $("#godinaZ").selectpicker({
        noneSelectedText: "Godina"
      });
      $("#godinaZ").selectpicker("refresh");
  

      $("#dugmeRadno").html(
       '<button class="btn btn-popUpBtn" type="submit" id="izmijeni" onclick="myFunction5()" data-dismiss="modal"><img src="img/icons/plus.png" alt="plus" class="plus"> Izmijeni</button>'
      );
    });
});

   function myFunction5(){
        console.log('izmijeni')
        event.preventDefault();
  
        let pozicija = $("#pozicija").val();
        let poslodavac = $("#poslodavac").val();
        let pocetakMjesec = $("#mjesecP").val();
        let pocetakGodina = $("#godinaP").val();
        let pocetak = pocetakMjesec + " " + pocetakGodina;
        let zavrsetakMjesec = $("#mjesecZ").val();
        let zavesetakGodina = $("#godinaZ").val();
        let zavrsetak = zavrsetakMjesec + " " + zavesetakGodina;
        let grad = $("#izaberiGradPopupF").val();
        let drzava = $("#izaberiDrzavuPopupF").val();
        let opis = $("#textArea1").val();
        let radimTrenutno = $("#radimTrenutno").is(":checked");
    
        if (pocetakGodina > zavesetakGodina && !radimTrenutno) {
          alert(
            "Godina početka je veća od godine završetka! Molimo unesite adekvatne podatke"
          );
          return;
        }
        if (
          pocetakMjesec >= zavrsetakMjesec &&
          pocetakGodina == zavesetakGodina &&
          !radimTrenutno
        ) {
          alert(
            "Mjesec početka je veći od mjeseca završetka! Molimo unesite adekvatne podatke"
          );
          return;
        }

        document.getElementById(idd).style.display = "none";
            console.log(idd);
            idd++;
    
        $(
          "<div class='leftBx py-1 px-1' style='cursor: pointer' id=" + "'" + idd + "'" + ">" +
            "<div class='wrapp'>" +
            "<h5 style='color: rgb(241, 89, 41)'>" +
            pozicija +
            "</h5>" +
            "<h5 style='font-weight: bold'>" +
            pocetak +
            " - " +
            zavrsetak +
            "</h5>" +
            "<p>" +
            poslodavac +
            " </p>" +
            "<p>" +
            grad +
            ", " +
            drzava +
            "</p>" +
            "<div class='accordion' id='accordionExample' style='background: white>" +
            "<div class='card-header' id='headingOne'>" +
            "<h5 class='opisPosla' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'> Opis posla: <img src='img/icons/arrow2.png' class='arrow'> </h5>" +
            "<div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>" +
            "<hr>" +
            opis +
            "<p style='color: rgb(241, 89, 41); text-align: center; text-decoration: underline; padding-top: 30px' data-toggle='modal' data-target='#modalIskustvo'> Uredi informacije </p>" +
            "</div>" +
            "</div>" +
            "</div></div></div>"
        ).appendTo($("#output"));
    }

  