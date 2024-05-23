import React from 'react';
import "./backoffice.css";
import BackofficeMenu from './BackofficeMenu';

export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav>
                <BackofficeMenu />
            </nav>
            <section>
                {children}
            </section>
        </section>
    );
}
