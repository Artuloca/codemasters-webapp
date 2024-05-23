import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/inicio') // Reemplaza esto con la URL de tu API
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Bienvenido a CodeMasters Academy</h1>
            <p>Aquí puedes gestionar alumnos, profesores y cursos.</p>
            {data && <p>Datos del servidor: {JSON.stringify(data)}</p>}
        </div>
    );
}

export default App;