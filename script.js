
document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("infoBox");
    const svgObject = document.getElementById("svgMap");

    svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;

        const municipios = {
            "soacha": "Soacha: Municipio de importancia estratégica en el borde sur de Bogotá.",
            "zipaquira": "Zipaquirá: Conocida por su catedral de sal, rica en historia minera.",
            "chia": "Chía: Centro de crecimiento urbano y comercial cerca de la capital.",
            "girardot": "Girardot: Importante destino turístico del clima cálido.",
            "facatativa": "Facatativá: Nodo logístico con acceso industrial y agrícola."
        };

        for (const [id, text] of Object.entries(municipios)) {
            const el = svgDoc.getElementById(id);
            if (el) {
                el.style.cursor = "pointer";
                el.addEventListener("click", () => {
                    infoBox.textContent = text;
                });
                el.addEventListener("mouseenter", () => {
                    el.style.fill = "#0A3D62";
                });
                el.addEventListener("mouseleave", () => {
                    el.style.fill = "";
                });
            }
        }
    });
});
