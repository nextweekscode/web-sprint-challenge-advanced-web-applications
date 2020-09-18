import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

import axiosWithAuth from '../utils/axiosWithAuth'
// import axios from 'axios'

const initialCredentials = {
    username: "",
    password: "",
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialCredentials)
    const history = useHistory()


    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            history.push("/bubble-page")
        })
        .catch(err => {
            console.log(err, "ah ah ah, you didnt say the magic word!")
        })
        setCredentials(initialCredentials)

    }

    return (
        <>
        <h1>Welcome to Bubble App!</h1>
        <section className="form-container">
            <form onSubmit={onSubmit} className="login-form">
                <label className="login-form-label">
                    Username:&nbsp;
                    <input
                    name="username"
                    type="text"
                    placeholder="Username goes here..."
                    value={credentials.username}
                    onChange={handleChange}
                    />
                </label>
                <label className="login-form-label">
                    Password:&nbsp;
                    <input
                    name="password"
                    type="text"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                    />
                </label>
                <button className="submit">Login</button>
            </form>
        </section>
        </>
    )
}

export default Login