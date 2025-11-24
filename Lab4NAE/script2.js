// Funcția care se execută la încărcarea paginii
window.onload = function() {
    // Obținem data curentă
    const dataCurenta = new Date();
    const luni = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    const zi = dataCurenta.getDate();
    const luna = luni[dataCurenta.getMonth()];
    const an = dataCurenta.getFullYear();

    // Injectăm data curentă în span-ul #dataProdus
    document.getElementById("dataProdus").innerText = `${zi} ${luna} ${an}`;

    // Selectăm butonul și secțiunea de detalii
    const btnDetalii = document.getElementById("btnDetalii");
    const detalii = document.getElementById("detalii");

    // Comportamentul butonului la click
    btnDetalii.onclick = function() {
        detalii.classList.toggle("ascuns");  // Toggle pentru ascundere/afișare detalii

        // Schimbăm textul butonului în funcție de starea detaliilor
        if (detalii.classList.contains("ascuns")) {
            btnDetalii.innerText = "Afișează detalii";
        } else {
            btnDetalii.innerText = "Ascunde detalii";
        }
    }
}
