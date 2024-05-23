import React from 'react';

function FichaProfesor({ nombre, asignatura }) {
    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>{nombre}</h2>
            <h3>{asignatura}</h3>
        </div>
    );
}

export default FichaProfesor;