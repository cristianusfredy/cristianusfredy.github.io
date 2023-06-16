window.onload = function () {
  // Tanggal akhir yang dituju (misalnya: 1 Januari 2023 pukul 00:00:00)
  var targetDate = new Date("Juni 22, 2023 00:00:00").getTime();

  // Update hitung mundur setiap 1 detik
  var countdown = setInterval(function () {
    // Dapatkan tanggal dan waktu saat ini
    var now = new Date().getTime();

    // Hitung selisih antara tanggal akhir dan tanggal saat ini
    var distance = targetDate - now;

    // Hitung hari, jam, menit, dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil hitung mundur di dalam elemen dengan id yang sesuai
    document.getElementById("days").innerHTML = padZero(days);
    document.getElementById("hours").innerHTML = padZero(hours);
    document.getElementById("minutes").innerHTML = padZero(minutes);
    document.getElementById("seconds").innerHTML = padZero(seconds);

    // Hentikan hitung mundur jika waktu telah habis
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Waktu telah habis";
    }
  }, 1000);

  // Fungsi untuk menambahkan angka 0 pada angka satu digit
  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }
};
