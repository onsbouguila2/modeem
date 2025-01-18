// Fonction pour inclure un fichier HTML dans une div
function includeHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (id === "header") {
                initToggleMenu();
            }
        })
        .catch(err => console.error(`Erreur lors de l'inclusion de ${file}:`, err));
}

// Fonction d'initialisation du toggle menu
function initToggleMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }
}

// Inclure le header et le footer
includeHTML("header", "../components/header.html");
includeHTML("footer", "../components/footer.html");
