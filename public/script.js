(() => {
    const tableBody = document.getElementById('tabla'); 

    fetch('https://starwars-n5ec-developuptcs-projects.vercel.app/')
        .then(response => response.json()) 
        .then(data => {
            if (data.result) {
                data.data.forEach(person => {
                    const row = document.createElement('tr');

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
     
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Error: No se encontraron datos.');
            }
        })
        .catch(err => console.error('Error al obtener los datos:', err));

    document.getElementById('btn-id').addEventListener('click', () => {
        const id = document.getElementById('id').value;
        if (id) {
            fetch(`https://starwars-n5ec-developuptcs-projects.vercel.app/${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.result && data.data) {

                        tableBody.innerHTML = '';

                        const person = data.data;
                        const row = document.createElement('tr');
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
                        tableBody.appendChild(row);
                    } else {
                        console.error('Personaje no encontrado.');
                        alert('Personaje no encontrado con ese ID.');
                    }
                })
                .catch(err => console.error('Error al buscar por ID:', err));
        } else {
            alert('Por favor, ingrese un ID.');
        }
    });
    document.getElementById('name').addEventListener('input', () => {
        const name = document.getElementById('name').value;

        if (name === '') {
            tableBody.innerHTML = '';
            return;
        }

        fetch(`https://starwars-n5ec-developuptcs-projects.vercel.app/name/${name}`)
            .then(response => response.json())
            .then(data => {
                if (data.result && data.data.length > 0) {
                    tableBody.innerHTML = '';

                    data.data.forEach(person => {
                        const row = document.createElement('tr');
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
                        tableBody.appendChild(row);
                    });
                } else {
                    tableBody.innerHTML = '<tr><td colspan="10">No se encontraron personajes con ese nombre</td></tr>';
                }
            })
            .catch(err => console.error('Error al buscar por nombre:', err));
    });
})();
