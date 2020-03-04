/* ========== NAVBAR ============ */
$(document).ready(function () {
    let scroll_start = 0;
    const startchange = $('.nav-bann');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar").addClass('changeColor').fadeIn("slow");
                $('.navbar-brand img').attr('src', 'img/moj posao logo.png');
                $('.logoMilennial img').attr('src', 'img/millennial.png').css('height',
                    '35px');
            } else {
                $('.navbar').removeClass('changeColor').fadeIn(3000);
                $('.navbar-brand img').attr('src', 'img/moj posao logo white.png');
                $('.logoMilennial img').attr('src', 'img/millennial_footer.png');
            }
        });
    }
});

/* ================= DRZAVE I GRADOVI ================= */

 var lookup = {
    'Crna Gora': ['Podgorica', 'Bar', 'Pljevlja', 'Nikšić', 'Herceg Novi'],
    'Srbija': ['Beograd', 'Novi Sad', 'Subotica', 'Niš'],
    'Bosna i Hercegovina': ['Sarajevo', 'Mostar', 'Banja Luka'],
    'Francuska': ['Strasbourg'],
    'Kina': ['Kina']
 };
 
 $('#options').on('change', function() {
    // Set selected option as variable
    var selectValue = $(this).val();
 
    // Empty the target field
    $('#choices').html('');
    
    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
       // Output choice in the target field
       $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
 });
 
/* 
function configureDropDownLists(izaberi, izaberiGrad) {
    var cg = ['Podgorica', 'Bar', 'Pljevlja', 'Nikšić'];
    var srb = ['Beograd', 'Novi Sad', 'Subotica', 'Niš'];
    var bih = ['Sarajevo', 'Mostar', 'Banja Luka'];
    var fr = ['Strasbourg'];
    var ch = ['Kina'];

    switch (izaberi.value) {
        case 'cg':
            izaberiGrad.options.length = 0;
            for (i = 0; i < cg.length; i++) {
                createOption(izaberiGrad, cg[i], cg[i]);
            }
            break;
        case 'srb':
            izaberiGrad.options.length = 0;
            for (i = 0; i < srb.length; i++) {
                createOption(izaberiGrad, srb[i], srb[i]);
            }
            break;
        case 'bih':
            izaberiGrad.options.length = 0;
            for (i = 0; i < bih.length; i++) {
                createOption(izaberiGrad, bih[i], bih[i]);
            }
            break;
        case 'fr':
            izaberiGrad.options.length = 0;
            for (i = 0; i < fr.length; i++) {
                createOption(izaberiGrad, fr[i], fr[i]);
            }
            break;
        case 'ch':
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
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    izaberiDrzavu.options.add(opt);
}
 */

/* ============= OPEN FILE =============== */
/* SLIKA */
window.onload = function () {
    var fileupload = document.getElementById("FileUpload");
    var filePath = document.getElementById("spnFilePath");
    var image = document.getElementById("imgFileUpload");
    var aparat = document.querySelector("#aparat");

    image.onclick = function () {
        fileupload.click();
    }
    fileupload.onchange = function () {
        aparat.src = URL.createObjectURL(this.files[0]);
        filePath.innerHTML = "<b>Slika je dodata.</b>";
        filePath.style.color = "rgb(241, 89, 41)";
        filePath.style.height = "50px";
    }
    /* CV */
    var fileupload2 = document.getElementById("FileUpload2");
    var filePath2 = document.getElementById("spnFilePath2");
    var addCV = document.getElementById("addCV");
    var cv = document.querySelector("#addCv1");

    addCV.onclick = function () {
        fileupload2.click();
    }
    fileupload2.onchange = function () {
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'pdf':
            case 'doc':
            case 'docx':
                break;
            default:
                alert('Ubacite svoj CV (.pdf),(.doc) ili (.docx).');
                this.value = '';
        }

        var fileName = fileupload2.value.split('\\')[fileupload2.value.split('\\').length - 1];
        var datum = this.files[0].lastModifiedDate;
        var tacanDatum = datum.getDate() + "/" + datum.getMonth() + 1 + "/" + datum.getFullYear();

        /*  cv.src = URL.createObjectURL(this.files[0]); */
        filePath2.innerHTML = "<b>CV je dodat.</b>" + " <br>" + tacanDatum + "<br>" + fileName;
        filePath2.style.background = "img/icons/pdf.png";
        filePath2.style.color = "rgb(241, 89, 41)";

        if (ext == 'pdf') {
            console.log("test test");
            cv.setAttribute("src", "img/icons/pdf.png");
            cv.setAttribute("style", "height : 100px;");
        } else {
            cv.setAttribute("src", "img/icons/doc.png");
            cv.setAttribute("style", "height : 100px;");
        }
    }
};


/* =============== ISKUSTVO CHECKBOX ========== */
$('#iskustvo1').click(function () {
    if (!$(this).is(':checked')) {
        $('#radnoIskustvo').unbind('click');
    } else {
        $('#radnoIskustvo').bind('click', function () {
            return false;
        });
    }
});

/* popup */
$(document).ready(function () {
    $('#radimTrenutno').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });
});


/* =============== SLAJDER VJESTINE ============== */
let vjestine = 0;
let vj = 1;

function myFunction() {

    $('<div class="row mt-2"><div class="col-sm-12 col-lg-6 offset-lg-6">' +
        '<div class="rightBox3 " id="za_brisanje' + vj + '">' +
        '<input type="text" class="ml-2 nazivVjestine" placeholder="Naziv vjestine">' +
        '<input type="range" min="1" max="10" value="5" class="slider ml-2" id="slider_' + vj + '"' + 'onchange="' +
        'updateValue(this)"' + '>' +
        '<span class="ml-2" id="demo_slider_' + vj + '" style="color: rgb(241, 89, 42);">5</span>' +
        '<img src="img/x.png" style="height: 12px; margin: 8px;" onclick="brisiVjestine(' + vj + ')"' + '>' +
        '</div></div></div>').appendTo($('#jumbotron-padding'));

    vjestine++;
    vj++;

    if (vjestine == 5) {
        $('#rightBox3').css("pointer-events", "none");
        $('#dodajVjestineBtn').removeAttr('onclick');
    }
}

function updateValue(slider) {
    console.log(slider.value)
    slider.style.background = 'linear-gradient(to right, #f1592a 0%, #f1592a ' + (slider.value - 1) + '4%, #f1f2f2 ' + (slider.value - 1) + '4%, #f1f2f2 100%)';
    $('#demo_' + slider.id + '').html(slider.value);
}

function brisiVjestine(id) {
    $('#za_brisanje' + id + '').remove();
    $('#dodajVjestineBtn').css("pointer-events", "auto");
    $('#dodajVjestineBtn').attr('onclick', 'insert()');
}

/* =============== FORMA POP UP  =============== */

/* radno iskustvo */
$(document).ready(function () {
    $('.btn-popUpBtn').on('click', function (event) {
        console.log('test')
        event.preventDefault();

        let pozicija = $('#pozicija').val();
        let poslodavac = $('#poslodavac').val();
        let pocetakMjesec = $('#mjesecP').val();
        let pocetakGodina = $('#godinaP').val();
        let pocetak = pocetakMjesec + " " + pocetakGodina;
        let zavrsetakMjesec = $('#mjesecZ').val();
        let zavesetakGodina = $('#godinaZ').val();
        let zavrsetak = zavrsetakMjesec + " " + zavesetakGodina;
        let grad = $('#grad').val();
        let drzava = $('#drzava').val();
        let opis = $('#textArea1').val();

        $("<div class='leftBx py-1 px-1' style='cursor: pointer'>" + "<div class='wrapp'>" +
            "<h5 style='color: rgb(241, 89, 41)'>" + pozicija + "</h5>" +
            "<h5 style='font-weight: bold'>" + pocetak + " - " + zavrsetak + "</h5>" +
            "<p>" + poslodavac + " </p>" +
            "<p>" + grad + ", " + drzava + "</p>" +
            "<div class='accordion' id='accordionExample' style='background: white>" +
            "<div class='card-header' id='headingOne'>" +
            "<h5 class='opisPosla' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'> Opis posla: <img src='img/icons/arrow2.png' class='arrow'> </h5>" +
            "<div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>" +
            "<hr>" + opis +
            "<p style='color: rgb(241, 89, 41); text-align: center; text-decoration: underline; padding-top: 30px' data-toggle='modal' data-target='#modalIskustvo'> Uredi informacije </p>" +
            "</div>" + "</div>" +
            "</div></div></div>"
        ).appendTo($('#output'));
    })


    /* obrazovanje */
    $('.btn-popUpBtnO').on('click', function (event) {
        event.preventDefault();
        let skola = $('#skola').val();
        let stepen = $('#stepen').val();
        let drzavaO = $('#drzavaO').val();
        let gradO = $('#gradO').val();
        let mjesecPocetakO = $('#mjesecPocetakO').val();
        let godinaPocetakO = $('#godinaPocetakO').val();
        let pocetakO = mjesecPocetakO + " " + godinaPocetakO;
        let mjesecZavrsetakO = $('#mjesecZavrsetakO').val();
        let godinaZavrsetkaO = $('#godinaZavrsetakO').val();
        let zavrsetakO = mjesecZavrsetakO + " " + godinaZavrsetkaO;

        $("<div class='RightBx py-2 px-2' style='cursor: pointer'>" + "<div class='wrapp2'>" +
            "<h5 style='color: rgb(241, 89, 41)'>" + skola + "</h5>" +
            "<h5 style='font-weight: bold'>" + pocetakO + " - " + zavrsetakO + "</h5>" +
            "<p>" + stepen + " </p>" +
            "<p>" + gradO + ", " + drzavaO + "</p>" +
            "<p style='color: rgb(241, 89, 41); text-align: center; text-decoration: underline; padding-top: 10px' data-toggle='modal' data-target='#modalIskustvo'> Uredi informacije</p>" +
            "</div></div>"
        ).appendTo($('#output2'));
    })
});


/* ============ SHOW PASSWORD ========== */
$(document).ready(function () {
    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fas fa-eye");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fas fa-eye");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});
$('#pass-field, #confirm-pass-field').on('keyup', function () {
    if ($('#pass-field').val() == $('#confirm-pass-field').val()) {
        $('#poruka').html('').css('color', 'green');
    } else
        $('#poruka').html('Unesite istu šifru.').css('color', 'red');
});