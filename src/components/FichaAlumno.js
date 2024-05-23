import React from 'react';

function FichaAlumno({ nombre, curso }) {
    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>{nombre}</h2>
            <h3>{curso}</h3>
        </div>
    );
}

export default FichaAlumno;