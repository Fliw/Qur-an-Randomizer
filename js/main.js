(function ($) {
    "use strict";

    /*==================================================================
      [ Validate ]*/
    var input = $(".validate-input .input100");

    $(".validate-form").on("submit", function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });

    $(".validate-form .input100").each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
            if (
                $(input)
                .val()
                .trim()
                .match(
                    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
                ) == null
            ) {
                return false;
            }
        } else {
            if ($(input).val().trim() == "") {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
    }
    $(".modal-subscribe").on("click", function (e) {
        e.stopPropagation();
    });

    $(".btn-close-modal").on("click", function () {
        $("#QuranModal").modal("hide");
    });
})(jQuery);
function GetApi(){
var url = "https://api.banghasan.com/quran/format/json/acak";
fetch(url).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
            var quranAyat = document.getElementById("QuranAyat");
            var quranTerjemahan = document.getElementById("QuranTerjemahan");
            var dataAyat = document.getElementById("dataAyat");
            var keteranganSurat = document.getElementById("keteranganSurat");
            quranAyat.innerHTML = data.acak.ar.teks;
            quranTerjemahan.innerHTML = data.acak.id.teks;
            dataAyat.innerHTML = '(QS.'+data.surat.nama+'('+data.surat.nomor+') Ayat '+ data.surat.ayat+')';
            keteranganSurat.innerHTML = "Keterangan surat : "+data.surat.keterangan;
        });
    } else {
        console.log("response failed");
    }
});
}