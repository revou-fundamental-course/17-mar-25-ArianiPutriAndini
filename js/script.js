function hitungLuasKeliling() {
    let sisi = document.getElementById("sisi").value;
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    let luas = sisi * sisi;
    let keliling = 4 * sisi;

    document.getElementById("hasil").innerHTML = `
        <strong>Hasil Perhitungan:</strong> <br>
        Luas = S x S <br>
        Luas = ${sisi} x ${sisi} <br>
        Luas = ${luas} <br><br>
        Keliling = 4 x S <br>
        Keliling = 4 x ${sisi} <br>
        Keliling = ${keliling}
    `;
}

function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerHTML = "";
}
