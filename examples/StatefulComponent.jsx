import React, { useState } from 'react';

const Button = () => {
    const [name, setName] = useState('Hola Mundo');

    return (
        <div>
            <button>{name}</button>
        </div>
    );
}

export default Button;