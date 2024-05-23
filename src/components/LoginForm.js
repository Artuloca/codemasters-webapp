import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'UsuarioCodeMasters': email,
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Guardar el token en el almacenamiento local y redirigir al usuario
            localStorage.setItem('token', data.token);
            window.location.href = '/home';
        } else {
            // Mostrar un mensaje de error
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Correo electrónico:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default LoginForm;