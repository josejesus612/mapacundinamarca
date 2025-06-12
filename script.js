
document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("infoBox");
    const svgObject = document.getElementById("svgMap");

    svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;

        const municipios = {
            "soacha": "Soacha: Municipio estratégico al sur de Bogotá.",
            "chia": "Chía: Centro urbano y comercial en crecimiento.",
            "zipaquira": "Zipaquirá: Famosa por su catedral de sal.",
            "facatativa": "Facatativá: Nodo logístico e industrial.",
            "fusagasuga": "Fusagasugá: Clima cálido y potencial turístico."
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
