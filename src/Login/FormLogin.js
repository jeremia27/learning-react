import React, { useState } from 'react';
import './FormLogin.css';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onSubmit = () => {
        localStorage.setItem('username', username);
        navigate('/Landingpage/Landingpage');
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan sesuatu dengan data login (contoh: validasi, kirim ke server, dll.)
        console.log('Username:', username);
        console.log('Password:', password);
        
    };
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button onClick={onSubmit} type="button">Login</button>
            </form>
        </div>
    )
}
