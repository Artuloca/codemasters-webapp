import React, { useState, useEffect } from 'react';
import FichaAlumno from '../components/FichaAlumno';

function App() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/alumnos')
            .then(response => response.json())
            .then(data => setAlumnos(data));
    }, []);

    return (
        <div>
            {alumnos.map((alumno, index) => (
                <FichaAlumno
                    key={index}
                    nombre={alumno.nombre}
                    curso={alumno.curso}
                />
            ))}
        </div>
    );
}

export default App;