import React from 'react';

function FichaCurso({ nombre, curso, descripcion }) {
    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>{nombre}</h2>
            <h3>{curso}</h3>
            <p>{descripcion}</p>
        </div>
    );
}

export default FichaCurso;