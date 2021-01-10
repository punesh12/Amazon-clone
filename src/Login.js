import React ,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import  "./Login.css"
import {auth} from './Firebase'

function Login() {

    const history = useHistory();
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')


    const login = event =>{
        event.preventDefault(); // stops the refresh

        // do login logic

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //logged in, redirect to homepage
            history.push('/');
        })
        .catch((e) =>alert(e.message));
    }
    const register = event =>{
        event.preventDefault(); // stops the refresh

        // do register logic

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            // create a user and logge in
            history.push('/');

        })

        .catch((e)=>alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    type="email" />
                    <h5>Password</h5>
                    <input value={password}
                    onChange={event => setPassword(event.target.value)}
                    type="password" />
                    <button 
                    onClick={login}
                    type="submit"  className="login__signInButton" >Sign In</button>

                    <p>By signing in you agree to Amazon's Use & sale.</p>
                    <button
                    onClick={register}
                    className="login__registerButton"  >Create your Amazon account</button>

                </form>

            </div>
        </div>
        


        
    )
}

export default Login
