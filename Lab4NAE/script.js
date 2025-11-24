document.getElementById('btnAdauga').addEventListener('click', function() {
    var activitate = document.getElementById('inputActivitate').value;
    if (activitate.trim() !== '') {
        // Crearea unui nou element <li>
        var li = document.createElement('li');
        
        // Obținerea datei curente
        var date = new Date();
        var luni = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
        var luna = luni[date.getMonth()];
        var zi = date.getDate();
        var an = date.getFullYear();

        // Crearea textului pentru elementul <li>
        li.textContent = activitate + " – adăugată la: " + zi + " " + luna + " " + an;
        
        // Adăugarea noului <li> în lista <ul>
        document.getElementById('listaActivitati').appendChild(li);

        // Golirea câmpului de input
        document.getElementById('inputActivitate').value = '';
    } else {
        alert("Vă rugăm să introduceți o activitate!");
    }
});
