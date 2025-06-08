document.getElementById("formPembelian").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const mobil = document.getElementById("mobil").value;
  const tanggal = document.getElementById("tanggal").value;

  document.getElementById("outputNama").textContent = nama;
  document.getElementById("outputMobil").textContent = mobil;
  document.getElementById("outputTanggal").textContent = tanggal;

  const gambarMobil = document.getElementById("gambarMobil");
  let src = "";

  // Menentukan gambar berdasarkan pilihan mobil
  switch (mobil) {
    case "Ferrari 488 GTB":
      src = "img/488.jpg";
      break;
    case "Ferrari LaFerrari":
      src = "laferrari.jpg";
      break;
    case "Ferrari F8 Tributo":
      src = "f8.jpg";
      break;
    case "Ferrari Portofino":
      src = "portofino.jpg";
      break;
    default:
      src = "";
  }

  if (src) {
    gambarMobil.src = src;
    gambarMobil.classList.remove("hidden");
  } else {
    gambarMobil.classList.add("hidden");
  }

  document.getElementById("output").classList.remove("hidden");
  document.getElementById("output").scrollIntoView({ behavior: "smooth" });
});
