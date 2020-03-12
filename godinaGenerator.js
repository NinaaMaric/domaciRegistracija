$(document).ready(function() {
    let datum = new Date();
    let godina = datum.getFullYear();
    let doKad = 41;

    let i;
    for (i = 0; i < doKad; i++) {
     
      $("#glavnaFormaGodine").append("<option>" + godina + "</option>");
     /*  $("#godinaZ").append("<option>" + godina + "</option>"); */
      $("#godinaP").append("<option>" + godina + "</option>");
     /*  $("#godinaZavrsetakO").append("<option>" + godina + "</option>"); */
      $("#godinaPocetakO").append("<option>" + godina + "</option>");      
      godina--;

    }
    $('#glavnaFormaGodine').selectpicker('refresh');
   /*  $('#godinaZ').selectpicker('refresh'); */
    $('#godinaP').selectpicker('refresh');
    /* $('#godinaZavrsetakO').selectpicker('refresh'); */
    $('#godinaPocetakO').selectpicker('refresh');
});