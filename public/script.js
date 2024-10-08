(() => {
    // Hacer la petición GET a la API de Star Wars
    fetch('https://starwars-n5ec-developuptcs-projects.vercel.app/')
        .then(response => response.json())  // Convertir la respuesta en JSON
        .then(data => {
            if (data.result) {
                // Seleccionar el cuerpo de la tabla en el DOM
                const tableBody = document.getElementById('tabla');

                // Recorrer los datos obtenidos
                data.data.forEach(person => {
                    // Crear una fila para cada personaje
                    const row = document.createElement('tr');
                    
                    // Crear columnas y rellenarlas con los datos del personaje
                    row.innerHTML = `
                        <td>${person.name || 'N/A'}</td>
                        <td>${person.height || 'N/A'}</td>
                        <td>${person.mass || 'N/A'}</td>
                        <td>${person.hair_color || 'N/A'}</td>
                        <td>${person.skin_color || 'N/A'}</td>
                        <td>${person.eye_color || 'N/A'}</td>
                        <td>${person.birth_year || 'N/A'}</td>
                        <td>${person.gender || 'N/A'}</td>
                        <td>${person.homeworld || 'N/A'}</td>
                        <td>${person.species || 'N/A'}</td>
                    `;
                    
                    // Agregar la fila al cuerpo de la tabla
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Error: No se encontraron datos.');
            }
        })
        .catch(err => console.error('Error al obtener los datos:', err));  // Manejar errores
})();
