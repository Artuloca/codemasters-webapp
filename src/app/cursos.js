import React, { useState, useEffect } from 'react';
import FichaCurso from './FichaCurso';

function App() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cursos') // Reemplaza esto con la URL de tu API
            .then(response => response.json())
            .then(data => setCursos(data));
    }, []);

    return (
        <div>
            {cursos.map((curso, index) => (
                <FichaCurso
                    key={index}
                    nombre={curso.nombre}
                    curso={curso.curso}
                    descripcion={curso.descripcion}
                />
            ))}
        </div>
    );
}

export default App;