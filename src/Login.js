import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { db, auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault() // prevent the page from refreshing
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
            
    }
    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            // successfully created a new user 
            .then((auth) => {
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login_img"
                    src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" >
                </img>
            </Link>

            <div className="login_container">
                <h1> Sign-in </h1>
                <form>
                    <h5> E-mail </h5>
                    <input type="text" value={email} 
                        onChange={e => setEmail(e.target.value)} />
                        
                    <h5> Password </h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} />
                    
                    <button onClick={signIn} type="submit" className="login_signInButton"> Sign In </button>
                </form>

                <p>
                    By Signing-in you agree to the AMAZON CLONE condidtions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login_registerButton"> Create account </button>
            </div>
        </div>
    )
}

export default Login