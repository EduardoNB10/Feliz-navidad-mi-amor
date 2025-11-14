javascript;
// ... (Tu código de script existente)

// Nuevo Script para manejar el formulario con AJAX/Fetch
const form = document.getElementById('christmasForm');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Obtener la URL de Formspree (la que tiene tu código personal)
    const formURL = e.target.action;
    const formData = new FormData(form);

    formStatus.textContent = 'Enviando...';
    
    try {
        const response = await fetch(formURL, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = '¡Gracias, mi amor! Recibí tu deseo. ❤️';
            form.reset();
            form.style.display = 'none'; // Opcional: Ocultar el formulario después de enviar
        } else {
            formStatus.textContent = 'Hubo un error al enviar. ¡Inténtalo de nuevo!';
        }
    } catch (error) {
        formStatus.textContent = 'Error de conexión. Revisa tu internet.';
    }
});