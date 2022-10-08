(function ($) {
    
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