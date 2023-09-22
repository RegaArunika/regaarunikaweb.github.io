// deret
function hitungFibonacci() {
  const n = parseInt(document.getElementById("n").value);

  if (n <= 0) {
    alert("Nilai n harus lebih dari 0.");
    return;
  }

  let fibonacci = [1];

  if(n>1){
    fibonacci.push(1);
  }
  for (let i = 2; i < n; i++) {
    const nextFib = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextFib);
  }

  document.getElementById("hasil").textContent = fibonacci.join(", ");
}

//  volume
document
  .getElementById("menghitungVolume")
  .addEventListener("click", function () {
    const selectedShape = document.getElementById("pilihBentuk").value;
    const input1 = parseFloat(document.getElementById("ukuran1").value);
    const input2 = parseFloat(document.getElementById("ukuran2").value);
    const input3 = parseFloat(document.getElementById("ukuran3").value);
    const result = document.getElementById("hasilVolume");

    let volume = 0;

    if (selectedShape === "kubus") {
      if (!isNaN(input1)) {
        volume = input1 ** 3;
      }
    } else if (selectedShape === "bola") {
      if (!isNaN(input1)) {
        volume = (4 / 3) * Math.PI * input1 ** 3;
      }
    } else if (selectedShape === "silinder") {
      if (!isNaN(input1) && !isNaN(input3)) {
        volume = Math.PI * input1 ** 2 * input3;
      }
    }

    result.textContent = isNaN(volume)
      ? "Masukkan angka yang valid."
      : volume.toFixed(2);
  });

  document.addEventListener("DOMContentLoaded", function () {
  
  const pilihBentuk = document.getElementById("pilihBentuk");
  const ukuran1 = document.getElementById("ukuran1");
  const ukuran2 = document.getElementById("ukuran2");
  const ukuran3 = document.getElementById("ukuran3");

  function tampilkanInput() {
    const bentukTerpilih = pilihBentuk.value;
    if (bentukTerpilih === "kubus") {
      ukuran1.style.display = "block";
      ukuran2.style.display = "none";
      ukuran3.style.display = "none";
    } else if (bentukTerpilih === "bola") {
      ukuran1.style.display = "block";
      ukuran2.style.display = "none";
      ukuran3.style.display = "none";
    } else if (bentukTerpilih === "silinder") {
      ukuran1.style.display = "block";
      ukuran2.style.display = "none";
      ukuran3.style.display = "block";
    }
  }

  tampilkanInput();
  pilihBentuk.addEventListener("change", tampilkanInput);
});
