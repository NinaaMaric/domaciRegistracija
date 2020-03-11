/* ========== NAVBAR ============ */
$(document).ready(function() {
  let scroll_start = 0;
  const startchange = $(".nav-bann");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar")
          .addClass("changeColor")
          .fadeIn("slow");
        $(".navbar-brand img").attr("src", "img/moj posao logo.png");
        $(".logoMilennial img")
          .attr("src", "img/millennial.png")
          .css("height", "35px");
      } else {
        $(".navbar")
          .removeClass("changeColor")
          .fadeIn(3000);
        $(".navbar-brand img").attr("src", "img/moj posao logo white.png");
        $(".logoMilennial img").attr("src", "img/millennial_footer.png");
      }
    });
  }
});

function samoSlova(event) {
  var pattern = /[a-zA-Z]+/g;
  / console.log(event.key); /;
  return pattern.test(event.key);
}

/* ================= DRZAVE I GRADOVI ================= */
function konfiguracija(izaberi, izaberiGrad) {
  console.log('sssss')
  var cg = ["Podgorica", "Bar", "Pljevlja", "Nikšić"];
  var srb = ["Beograd", "Novi Sad", "Subotica", "Niš"];
  var bih = ["Sarajevo", "Mostar", "Banja Luka"];
  var fr = ["Strasbourg"];
  var ch = ["Kina"];

  switch (izaberi.value) {
    case "cg":
      izaberiGrad.options.length = 0;
      for (i = 0; i < cg.length; i++) {
        createOption(izaberiGrad, cg[i], cg[i]);
      }
      break;
    case "srb":
      izaberiGrad.options.length = 0;
      for (i = 0; i < srb.length; i++) {
        createOption(izaberiGrad, srb[i], srb[i]);
      }
      break;
    case "bih":
      izaberiGrad.options.length = 0;
      for (i = 0; i < bih.length; i++) {
        createOption(izaberiGrad, bih[i], bih[i]);
      }
      break;
    case "fr":
      izaberiGrad.options.length = 0;
      for (i = 0; i < fr.length; i++) {
        createOption(izaberiGrad, fr[i], fr[i]);
      }
      break;
    case "ch":
      izaberiGrad.options.length = 0;
      for (i = 0; i < ch.length; i++) {
        createOption(izaberiGrad, ch[i], ch[i]);
      }
      break;
    default:
      izaberiGrad.options.length = 0;
      break;
  }
}

function createOption(izaberiDrzavu, text, value) {
  console.log('s2')
  var opt = document.createElement("option");
  opt.value = value;
  opt.text = text;
  izaberiDrzavu.options.add(opt);
  $("#izaberiGrad").selectpicker("refresh");
}

/* pop-up radno iskustvo */
 function radnoIskustvo(izaberiRR, izaberiGradPopupF) {
   console.log('2')
  let cg = ["Podgorica", "Bar", "Pljevlja", "Nikšić"];
  let srb = ["Beograd", "Novi Sad", "Subotica", "Niš"];
  let bih = ["Sarajevo", "Mostar", "Banja Luka"];
  let fr = ["Strasbourg"];
  let ch = ["Kina"];

  console.log(izaberiRR.value);

  switch (izaberiRR.value) {
    
    case "Crna Gora":
      izaberiGradPopupF.options.length = 0;
      for (i = 0; i < cg.length; i++) {
        createOption2(izaberiGradPopupF, cg[i], cg[i]);
      }
       console.log('aj');
      break;
    case "Srbija":
      izaberiGradPopupF.options.length = 0;
      for (i = 0; i < srb.length; i++) {
        createOption2(izaberiGradPopupF, srb[i], srb[i]);
      }
      break;
    case "Bosna i Hercegovina":
      izaberiGradPopupF.options.length = 0;
      for (i = 0; i < bih.length; i++) {
        createOption2(izaberiGradPopupF, bih[i], bih[i]);
      }
      break;
    case "Francuska":
      izaberiGradPopupF.options.length = 0;
      for (i = 0; i < fr.length; i++) {
        createOption2(izaberiGradPopupF, fr[i], fr[i]);
      }
      break;
    case "Kina":
      izaberiGradPopupF.options.length = 0;
      for (i = 0; i < ch.length; i++) {
        createOption2(izaberiGradPopupF, ch[i], ch[i]);
      }
      break;
      
    default:
      izaberiGradPopupF.options.length = 0;
      break;
      
  }
}

function createOption2(izaberiDrzavuPopupF, text, value) {
  console.log("s11111111")
  var opt = document.createElement("option");
  opt.value = value;
  opt.text = text;
  izaberiDrzavuPopupF.options.add(opt);
  $("#izaberiGradPopupF").selectpicker("refresh");
}
 
/* pop-up obrazovanje */
 function obrazovanjeP(izaberiEE, izaberiGradPopup2) {
  var cg = ["Podgorica", "Bar", "Pljevlja", "Nikšić"];
  var srb = ["Beograd", "Novi Sad", "Subotica", "Niš"];
  var bih = ["Sarajevo", "Mostar", "Banja Luka"];
  var fr = ["Strasbourg"];
  var ch = ["Kina"];
console.log(izaberiEE.value)
  switch (izaberiEE.value) {
    case "Crna Gora":
      izaberiGradPopup2.options.length = 0;
      for (i = 0; i < cg.length; i++) {
        createOption3(izaberiGradPopup2, cg[i], cg[i]);
      }
      break;
    case "Srbija":
      izaberiGradPopup2.options.length = 0;
      for (i = 0; i < srb.length; i++) {
        createOption3(izaberiGradPopup2, srb[i], srb[i]);
      }
      break;
    case "Bosna i Hercegovina":
      izaberiGradPopup2.options.length = 0;
      for (i = 0; i < bih.length; i++) {
        createOption3(izaberiGradPopup2, bih[i], bih[i]);
      }
      break;
    case "Francuska":
      izaberiGradPopup2.options.length = 0;
      for (i = 0; i < fr.length; i++) {
        createOption3(izaberiGradPopup2, fr[i], fr[i]);
      }
      break;
    case "Kina":
      izaberiGradPopup2.options.length = 0;
      for (i = 0; i < ch.length; i++) {
        createOption3(izaberiGradPopup2, ch[i], ch[i]);
      }
      break;
    default:
      izaberiGradPopup2.options.length = 0;
      break;
  }
}

function createOption3(izaberiDrzavuPopup2, text, value) {
  var opt = document.createElement("option");
  opt.value = value;
  opt.text = text;
  izaberiDrzavuPopup2.options.add(opt);
  $("#izaberiGradPopup2").selectpicker("refresh");
} 

/* ============= OPEN FILE =============== */
/* SLIKA */
window.onload = function() {
  var fileupload = document.getElementById("FileUpload");
  var filePath = document.getElementById("spnFilePath");
  var image = document.getElementById("imgFileUpload");
  var aparat = document.querySelector("#aparat");

  image.onclick = function() {
    fileupload.click();
  };
  fileupload.onchange = function() {
    aparat.src = URL.createObjectURL(this.files[0]);

    var fileSize = this.files[0].size;
    if (fileSize > 2097152) {
      alert("Fajl je veći od 2MB.");
      return;
    }

    filePath.innerHTML = "<b>Slika je dodata.</b>";
    filePath.style.color = "rgb(241, 89, 41)";
    filePath.style.height = "50px";
  };
  /* CV */
  var fileupload2 = document.getElementById("FileUpload2");
  var filePath2 = document.getElementById("spnFilePath2");
  var addCV = document.getElementById("addCV");
  var cv = document.querySelector("#addCv1");

  addCV.onclick = function() {
    fileupload2.click();
  };
  fileupload2.onchange = function() {
    var ext = this.value.match(/\.(.+)$/)[1];
    switch (ext) {
      case "pdf":
      case "doc":
      case "docx":
        break;
      default:
        alert("Ubacite svoj CV (.pdf),(.doc) ili (.docx).");
        this.value = "";
    }

    var fileSize = this.files[0].size;
    if (fileSize > 2097152) {
      alert("Fajl je veći od 2MB.");
      return;
    }

    var fileName = fileupload2.value.split("\\")[
      fileupload2.value.split("\\").length - 1
    ];
    var datum = this.files[0].lastModifiedDate;
    var tacanDatum =
      datum.getDate() + "/" + datum.getMonth() + 1 + "/" + datum.getFullYear();

    /*  cv.src = URL.createObjectURL(this.files[0]); */
    filePath2.innerHTML =
      "<b>CV je dodat.</b>" + " <br>" + tacanDatum + "<br>" + fileName;
    filePath2.style.background = "img/icons/pdf.png";
    filePath2.style.color = "rgb(241, 89, 41)";

    if (ext == "pdf") {
      console.log("test test");
      cv.setAttribute("src", "img/icons/pdf.png");
      cv.setAttribute("style", "height : 100px;");
    } else {
      cv.setAttribute("src", "img/icons/doc.png");
      cv.setAttribute("style", "height : 100px;");
    }
  };
};

/* =============== ISKUSTVO CHECKBOX ========== */
$("#iskustvo1").click(function() {
  if (!$(this).is(":checked")) {
    $("#radnoIskustvo").unbind("click");
  } else {
    $("#radnoIskustvo").bind("click", function() {
      return false;
    });
  }
});

/* popup */
  $(function() {
    $("#radimTrenutno").on("click",function() {
      $(".info5").toggle(this.unchecked);
    });
  });

/* =============== SLAJDER VJESTINE ============== */
let vjestine = 0;
let vj = 1;

function myFunction() {
  $(
    '<div class="row mt-2"><div class="col-sm-12 col-lg-6 offset-lg-6">' +
      '<div class="rightBox3 " id="za_brisanje' +
      vj +
      '">' +
      '<input type="text" class="ml-2 nazivVjestine" placeholder="Naziv vjestine">' +
      '<input type="range" min="1" max="10" value="5" class="slider ml-2" id="slider_' +
      vj +
      '"' +
      'onchange="' +
      'updateValue(this)"' +
      ">" +
      '<span class="ml-2" id="demo_slider_' +
      vj +
      '" style="color: rgb(241, 89, 42);">5</span>' +
      '<img src="img/x.png" style="height: 12px; margin: 8px;" onclick="brisiVjestine(' +
      vj +
      ')"' +
      ">" +
      "</div></div></div>"
  ).appendTo($("#jumbotron-padding"));

  vjestine++;
  vj++;

  if (vjestine == 5) {
    $("#rightBox3").css("pointer-events", "none");
    $("#dodajVjestineBtn").removeAttr("onclick");
  }
}

function updateValue(slider) {
  console.log(slider.value);
  slider.style.background =
    "linear-gradient(to right, #f1592a 0%, #f1592a " +
    (slider.value - 1) +
    "4%, #f1f2f2 " +
    (slider.value - 1) +
    "4%, #f1f2f2 100%)";
  $("#demo_" + slider.id + "").html(slider.value);
}

function brisiVjestine(id) {
  $("#za_brisanje" + id + "").remove();
  $("#dodajVjestineBtn").css("pointer-events", "auto");
  $("#dodajVjestineBtn").attr("onclick", "insert()");
}

/* ================ E-MAIL VALIDATION ================== */
$("#mejl").on("keyup change paste cut click", "#email", function(e) {
  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
    emailVal = $("#email").val(),
    emailErrorMsg =
      !emailVal || !pattern.test(emailVal) ? "E-mail nije validan." : "";

  $(".email-error").text(emailErrorMsg);

  if (emailErrorMsg) {
    e.preventDefault();
  }
});

/* ============ SHOW PASSWORD ========== */
$(document).ready(function() {
  $("#show_hide_password a").on("click", function(event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("fas fa-eye");
      $("#show_hide_password i").removeClass("fa-eye");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("fas fa-eye");
      $("#show_hide_password i").addClass("fa-eye");
    }
  });
});

$(document).ready(function() {
  $("#confirm_password a").on("click", function(event) {
    event.preventDefault();
    if ($("#confirm_password input").attr("type") == "text") {
      $("#confirm_password input").attr("type", "password");
      $("#confirm_password i").addClass("fas fa-eye");
      $("#confirm_password i").removeClass("fa-eye");
    } else if ($("#confirm_password input").attr("type") == "password") {
      $("#confirm_password input").attr("type", "text");
      $("#confirm_passwordd i").removeClass("fas fa-eye");
      $("#confirm_password i").addClass("fa-eye");
    }
  });
});

$("#pass-field, #confirm-pass-field").on("keyup", function() {
  if ($("#pass-field").val() == $("#confirm-pass-field").val()) {
    $("#poruka")
      .html("")
      .css("color", "green");
  } else
    $("#poruka")
      .html("Unesite istu šifru.")
      .css("color", "red");
});
