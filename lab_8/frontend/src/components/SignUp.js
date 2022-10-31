import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SignUp = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCopy, setPasswordCopy] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordCopyDirty, setPasswordCopyDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    const [loginError, setLoginError] = useState('Login can\'t be empty')
    const [passwordError, setPasswordError] = useState('Password can\'t be empty')
    const [passwordCopyError, setPasswordCopyError] = useState('Repeat your password')
    const [emailError, setEmailError] = useState("Enter a valid email")
    const [phoneError, setPhoneError] = useState("Enter a phone number based on pattern (xxx)-xxx-xx-xx")

    const [loginOccupied, setLoginOccupied] = useState(false)

    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (loginError || passwordError || passwordCopyError || emailError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError, passwordCopyError, emailError, phoneError]);

    const blurHandler = e => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'passwordCopy':
                setPasswordCopyDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            default:
                break;
        }
    }

    const loginHandler = e => {
        setLogin(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 15) {
            setLoginError("Login length should be between 3 and 15 symbols")
            if (!e.target.value) {
                setLoginError("Login can't be empty")
            }
        } else {
            setLoginError('')
        }
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 32) {
            setPasswordError("Password length should be between 5 and 32 symbols")
            if (!e.target.value) {
                setPasswordError("Password can't be empty")
            }
        } else {
            setPasswordError('')
            if (e.target.value !== passwordCopy) {
                setPasswordCopyError('Passwords don\'t match')
            } else {
                setPasswordCopyError('')
            }
        }
    }

    const passwordCopyHandler = e => {
        setPasswordCopy(e.target.value)
        if (!e.target.value) {
            setPasswordCopyError('Repeat your password')
        } else if (e.target.value !== password) {
            setPasswordCopyError('Passwords don\'t match')
        } else {
            setPasswordCopyError('')
        }
    }

    const emailHandler = e => {
        setEmail(e.target.value)
        const regExp =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!regExp.test(String(e.target.value).toLowerCase())) {
            setEmailError("Enter a valid email")
        } else {
            setEmailError('')
        }
    }

    const phoneHandler = e => {
        setPhone(e.target.value)
        const regExp = /\(\d{3}\)-\d{3}-\d{2}-\d{2}/i
        if (!regExp.test(String(e.target.value))) {
            setPhoneError('Enter a phone number based on pattern (xxx)-xxx-xx-xx')
        } else {
            setPhoneError('')
        }
    }

    const submitHandler = e => {
        e.preventDefault()

        const URL = "http://192.168.56.1:8080/signUp";

        axios.post(URL, { "login": login, "password": password, "email": email, "phone": phone })
            .then(() => {
                setLoginOccupied(false)
                navigate('/');
            })
            .catch(() => {
                setLoginOccupied(true)
                setLogin('')
            })
    }

    return (
        <div id="registration">
            <div className="container">
                <div id="registration-row" className="row justify-content-center align-items-center mt-4 mb-5">
                    <div className="col-10 col-lg-6 p-4 registration-form">
                        <form onSubmit={e => submitHandler(e)} autoComplete="off">
                            <h3 className="text-center mt-3">Sign up</h3>

                            {loginOccupied && <div className='error-message text-center'>User with this login already exists</div>}

                            <div className="form-group">
                                <label htmlFor="login">Login:</label><br/>
                                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)}
                                       name='login' type="text" id="login" maxLength="15" className="form-control" />
                                {(loginDirty && loginError) && <div className='error-message'>{loginError}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label><br/>
                                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}
                                       name='password' type="password" id="password" maxLength="32" className="form-control" />
                                {(passwordDirty && passwordError) && <div className='error-message'>{passwordError}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordCopy">Confirm password:</label><br/>
                                <input onChange={e => passwordCopyHandler(e)} value={passwordCopy} onBlur={e => blurHandler(e)}
                                       name='passwordCopy' type="password" id="passwordCopy" maxLength='32' className="form-control" />
                                {(passwordCopyDirty && passwordCopyError) && <div className='error-message'>{passwordCopyError}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label><br/>
                                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)}
                                       name='email' type="text" id="email" maxLength="128" className="form-control" />
                                {(emailDirty && emailError) && <div className='error-message'>{emailError}</div>}
                            </div>

                            <div className="form-group">
                                <label>Phone:</label><br/>
                                <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)}
                                       name='phone' type="text" id="phone" maxLength="15" className="form-control" />
                                {(phoneDirty && phoneError) && <div className='error-message'>{phoneError}</div>}
                            </div>

                            <div className="form-text text-center mt-4 mb-2">
                                <span>Already have an account?</span> <a href="/">Sign in</a>
                            </div>

                            <div className="text-center mt-3">
                                <button disabled={!formValid} type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
