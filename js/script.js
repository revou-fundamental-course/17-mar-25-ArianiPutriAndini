function hitungLuas() {
    let sisi = document.getElementById("sisi").value;
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }
    let luas = sisi * sisi;
    document.getElementById("hasil").innerHTML = `L = S x S <br> L = ${sisi} x ${sisi} <br> L = ${luas}`;
}
function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerHTML = "";
}
