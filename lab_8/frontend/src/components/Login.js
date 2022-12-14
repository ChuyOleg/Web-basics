import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [loginError, setLoginError] = useState('Enter your login')
    const [passwordError, setPasswordError] = useState('Enter your password')
    const [credentialValid, setCredentialValid] = useState(true)

    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError]);

    const blurHandler = e => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            default:
                break;
        }
    }

    const loginHandler = e => {
        setLogin(e.target.value)
        if (!e.target.value) {
            setLoginError('Enter your login')
        } else {
            setLoginError('')
        }
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
        if (!e.target.value) {
            setPasswordError("Enter your password")
        } else {
            setPasswordError('')
        }
    }

    const submitHandler = e => {
        e.preventDefault()

        const URL = "http://192.168.56.1:8080/login";

        axios.post(URL, { "login": login, "password": password })
            .then(() => {
                setCredentialValid(true)
                navigate({
                    pathname: '/account',
                    search: '?login=' + login
                });
            })
            .catch(() => {
                setCredentialValid(false)
                setPassword('')
            })
    }

    return (
        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center mt-4">
                    <div className="login-form mt-5 p-4 col-lg-6 col-10">
                        <form onSubmit={e => submitHandler(e)}>
                            <h3 className="text-center mt-4">Sign in</h3>

                            <div className="form-text text-center mt-4 mb-2">
                                <span>Do not have an account?</span> <a href="/signUp">Sign up</a>
                            </div>

                            {!credentialValid && <div className='error-message text-center'>Invalid Credential</div>}

                            <div>
                                <label htmlFor="login">Login</label><br/>
                                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)}
                                       type="text" name="login" id="login" className="form-control" />
                                {(loginDirty && loginError) && <div className='error-message'>{loginError}</div>}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label><br/>
                                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}
                                       type="password" name="password" id="password" className="form-control" />
                                {(passwordDirty && passwordError) && <div className='error-message'>{passwordError}</div>}
                            </div>

                            <div className="text-center mt-3">
                                <button disabled={!formValid} type="submit" className="btn btn-primary">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
