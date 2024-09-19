

document.getElementById('connectForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const data = document.getElementById('data').value;
    const responseDiv = document.getElementById('response');

    try {
        // Realizar la solicitud al servidor
        const response = await fetch('https://pegaso.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        });

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Procesar la respuesta en formato JSON
        const result = await response.json();
        responseDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    } catch (error) {
        responseDiv.textContent = `Error de conexión: ${error.message}`;
    }
});
