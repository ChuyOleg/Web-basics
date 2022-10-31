import React, {useEffect, useState } from 'react';
import './Account.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useSearchParams} from "react-router-dom";

const Account = () => {

    const [searchParams] = useSearchParams();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCopy, setPasswordCopy] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [passwordDirty, setPasswordDirty] = useState(true)
    const [passwordCopyDirty, setPasswordCopyDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(true)
    const [phoneDirty, setPhoneDirty] = useState(true)
    const [updateDirty, setUpdateDirty] = useState(false)

    const [passwordError, setPasswordError] = useState('')
    const [passwordCopyError, setPasswordCopyError] = useState('Repeat your password')
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")

    const [updateSuccess, setUpdateSuccess] = useState(false)

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (passwordError || passwordCopyError || emailError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [passwordError, passwordCopyError, emailError, phoneError]);

    const blurHandler = e => {
        switch (e.target.name) {
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
        const URL = "http://192.168.56.1:8080/users";

        setUpdateDirty(true)

        axios.put(URL, { "login": login, "password": password, "email": email, "phone": phone })
            .then(() => {
                setUpdateSuccess(true)
            })
            .catch(() => {
                setUpdateSuccess(false)
            })
    }

    useEffect(() => {
        const userLogin = searchParams.get("login")
        const URL = "http://192.168.56.1:8080/users/" + userLogin;

        axios.get(URL)
            .then(response => {
                setLogin(response.data.login)
                setPassword(response.data.password)
                setEmail(response.data.email)
                setPhone(response.data.phone)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div id="account">
            <div className="container">
                <div id="account-row" className="row justify-content-center align-items-center mt-4 mb-5">
                    <div className="col-10 col-lg-6 p-4 update-form">

                        <div className="logout-block text-center">
                            <a href="/" className="align-middle">Logout</a>
                        </div>

                        <form onSubmit={e => submitHandler(e)} autoComplete="off">
                            <h3 className="text-center mt-3">Account</h3>

                            {(updateDirty && updateSuccess) && <div className='success-message text-center'>Successfully updated</div>}
                            {(updateDirty && !updateSuccess) && <div className='error-message text-center'>Something went wrong...</div>}

                            <div className="form-group">
                                <p>Login: <span className='loginField'>{login}</span></p>
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

                            <div className="text-center mt-3">
                                <button disabled={!formValid} type="submit" className="btn btn-success">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
