(function ($) {
    
    $(".modal-subscribe").on("click", function (e) {
        e.stopPropagation();
    });
    $(".btn-close-modal").on("click", function () {
        $("#QuranModal").modal("hide");
    });
})(jQuery);
const getSoundAyat = (surah, ayat) => {
    let url = `https://api.quran.gading.dev/surah/${surah}/${ayat}`;
    fetch(url).then(response => {
        if (response.ok) {
            response.json().then(_ => {
                const quranAyatSound = document.getElementById("QuranAyatSound");
                quranAyatSound.innerHTML = `<audio controls>
                <source src="${_.data.audio.primary}" type="audio/ogg">
                <source src="${_.data.audio.primary}" type="audio/mpeg">
              Your browser does not support the audio element.
              </audio>`
            })
        } else {
            console.log(`response ${url} failed`);
        }
    })
}
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
            getSoundAyat(data.acak.id.surat, data.acak.id.ayat)
        });
    } else {
        console.log("response failed");
    }
});
}
AOS.init();