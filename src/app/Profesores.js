import React, { useState, useEffect } from 'react';
import FichaProfesor from '../components/FichaProfesor';

function App() {
    const [profesores, setProfesores] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/profesores')
            .then(response => response.json())
            .then(data => setProfesores(data));
    }, []);

    return (
        <div>
            {profesores.map((profesor, index) => (
                <FichaProfesor
                    key={index}
                    nombre={profesor.nombre}
                    asignatura={profesor.asignatura}
                />
            ))}
        </div>
    );
}

export default App;