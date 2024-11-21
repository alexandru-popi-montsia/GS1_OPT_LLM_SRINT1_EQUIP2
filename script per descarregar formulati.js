 <script>
        function downloadResults() {
        // Obtenim el formulari
        const form = document.getElementById('questionnaire-form');
        const formData = new FormData(form);

        // Creem un objecte per guardar les respostes
        let results = "Resultats del Formulari:\n\n";
        formData.forEach((value, key) => {
            results += `${key}: ${value}\n`;
        });

        // Generem un fitxer de text
        const blob = new Blob([results], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Creem un enllaç de descàrrega
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resultats_formulari.txt';
        a.click();
        // Alliberem la memòria
        URL.revokeObjectURL(url);
    }
</script>