import React from 'react';
import Link from 'next/link';

export default function BackofficeMenu() {
    return (
        <nav>
            <ul>
                <li><Link href="/backoffice/inicio">Inicio</Link></li>
                <li><Link href="/backoffice/alumnos">Alumnos</Link></li>
                <li><Link href="/backoffice/profesores">Profesores</Link></li>
                <li><Link href="/backoffice/cursos">Cursos</Link></li>
            </ul>
        </nav>
    );
}