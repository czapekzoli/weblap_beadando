document.addEventListener("DOMContentLoaded", function () {
    const ids = ["osszetevok_1_plusz", "osszetevok_2_plusz", "osszetevok_3_plusz", "osszetevok_4_plusz", "osszetevok_5_plusz", "osszetevok_6_plusz", "osszetevok_7_plusz", "osszetevok_8_plusz", "recept_1_plusz", "recept_2_plusz", "recept_3_plusz", "recept_4_plusz"];
    ids.forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.addEventListener("click", function () {
                pluszadagolas(id.replace("_plusz", ""));
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ids = ["osszetevok_1_minusz", "osszetevok_2_minusz", "osszetevok_3_minusz", "osszetevok_4_minusz", "osszetevok_5_minusz", "osszetevok_6_minusz", "osszetevok_7_minusz", "osszetevok_8_minusz", "recept_1_minusz", "recept_2_minusz", "recept_3_minusz", "recept_4_minusz"];
    ids.forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.addEventListener("click", function () {
                minuszadagolas(id.replace("_minusz", ""));
            });
        }
    });
});

function pluszadagolas(receptid) {
    let felsorolas = document.getElementById(receptid).getElementsByTagName("li")
    console.log(felsorolas)
    let hossza = felsorolas.length
    for (i = 0; i < hossza; i++) {
        szokoz_index = felsorolas[i].innerText.indexOf(" ")
        mennyiseg = felsorolas[i].innerText.substring(0, szokoz_index)
        console.log(felsorolas[i].textContent)
        felsorolas[i].innerHTML = `<input type="checkbox" class="rounded-checkbox">${Number(mennyiseg) + Number(mennyiseg * (1 / Number((document.getElementById(`${receptid}_adag`).innerText))))} ${felsorolas[i].innerText.substring(szokoz_index)}`
    }
    document.getElementById(`${receptid}_adag`).innerText = Number(document.getElementById(`${receptid}_adag`).innerText) + 1
}

function minuszadagolas(receptid) {
    if ((Number(document.getElementById(`${receptid}_adag`).innerText) - 1) >= 1) {
        let felsorolas = document.getElementById(receptid).getElementsByTagName("li")
        let hossza = felsorolas.length
        for (i = 0; i < hossza; i++) {
            szokoz_index = felsorolas[i].innerText.indexOf(" ")
            mennyiseg = felsorolas[i].innerText.substring(0, szokoz_index)
            console.log(felsorolas[i].textContent)
            felsorolas[i].innerHTML = `<input type="checkbox" class="rounded-checkbox">${Number(mennyiseg) - Number(mennyiseg * (1 / Number((document.getElementById(`${receptid}_adag`).innerText))))} ${felsorolas[i].innerText.substring(szokoz_index)}`
        }
        document.getElementById(`${receptid}_adag`).innerText = Number(document.getElementById(`${receptid}_adag`).innerText) - 1
    }
}

function felugrik(receptszam) {
    document.getElementById(receptszam).classList.toggle("active");
}

$(document).ready(function () {

    $(".center").slick({
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });

});

$(document).ready(function () {
    $("#recept_form").validate({
        rules: {
            husos: "required",
            recept_nev: {
                required: true,
            },
            adag: {
                required: true,
                min: 1,
                max: 20,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            bekuldes_datum: {
                required: true,
            }
        },
        messages: {
            recept_nev: {required: " Írd be az étel nevét!",
            },
            adag: {
                required: " Add meg a mennyiséget!",
                min: " A minimum adag mennyiség: 1",
                max: " A maximum adag mennyiség: 20"
            },
            email: " Add meg a VALÓS email címedet!",
            husos: " Kérlek válassz!",
            bekuldes_datum: " Add meg a beküldés dátumát!"
        },
    });
});