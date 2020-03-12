$(document).ready(function() {
    $("#zavrsetka").change(function() {
      let mjesecPocetkaRadno = $("#mjesecP").val();
      let mjesecZavrsetkaRadno = $("#mjesecZ").val();
      let godinaPocetka = $("#godinaP").val();
  
      let godinaZavrsetka = $("#godinaZ").val();
      let granica = new Date();
      let granicaa = granica.getFullYear();
      let i;
  
      let mjeseci = [
        "Januar",
        "Februar",
        "Mart",
        "April",
        "Maj",
        "Jun",
        "Jul",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar"
      ];
  
      let ii;
  
      if (mjesecPocetkaRadno == mjesecZavrsetkaRadno) {
        console.log("istimjeseci");
        for (i = godinaPocetka; i <= granicaa; i++) {
        
          $("#godinaZ").append("<option>" + i + "</option>");
        }
        $("#godinaZ").selectpicker("refresh");
  
      } else if (godinaPocetka == godinaZavrsetka) {
          console.log('istegodine');
        for (ii = 0; ii <= mjeseci.length; ii++) {
          if (mjesecPocetkaRadno >= mjeseci[ii]) {
              console.log(mjeseci[ii]);
              $('#mjesecZ').append("<option>" + mjeseci[ii] + "</option>");
          }
        }
        $("#mjesecZ").selectpicker("refresh");
      }
    });
    $("#mjesecZ").change(function() {

    });
  
  });

/* ============= obrazovanje ============ */
  $(document).ready(function() {
    $("#zavrsetkaO").change(function() {
      let mjesecPocetkaRadno = $("#mjesecPocetakO").val();
      let mjesecZavrsetkaRadno = $("#mjesecZavrsetakO").val();
      let godinaPocetka = $("#godinaPocetakO").val();
  
      let godinaZavrsetka = $("#godinaZavrsetakO").val();
      let granica = new Date();
      let granicaa = granica.getFullYear();
      let i;
  
      let mjeseci = [
        "Januar",
        "Februar",
        "Mart",
        "April",
        "Maj",
        "Jun",
        "Jul",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar"
      ];
  
      let ii;
  
      if (mjesecPocetkaRadno == mjesecZavrsetkaRadno) {
        console.log("istimjeseci");
        for (i = godinaPocetka; i <= granicaa; i++) {
        
          $("#godinaZavrsetakO").append("<option>" + i + "</option>");
        }
        $("#godinaZavrsetakO").selectpicker("refresh");
  
      } else if (godinaPocetka == godinaZavrsetka) {
          console.log('istegodine');
        for (ii = 0; ii <= mjeseci.length; ii++) {
          if (mjesecPocetkaRadno >= mjeseci[ii]) {
              console.log(mjeseci[ii]);
              $('#mjesecZavrsetakO').append("<option>" + mjeseci[ii] + "</option>");
          }
        }
        $("#mjesecZavrsetakO").selectpicker("refresh");
      }
    });
    $("#mjesecZavrsetakO").change(function() {

    });
  
  });