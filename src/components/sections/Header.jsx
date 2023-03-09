import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

    const [isSignup, setIsSignup] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const API_URL = "http://localhost:8080/api/auth/";
    let token = localStorage.getItem('user')
    useEffect(() => {
        console.log(isSignup)
        let menu = document.querySelector('.menu-btn-cls');
        let navbar = document.querySelector('.navbar');
        window.onscroll = () => {

            menu.classList.remove('fa-times');
            navbar.classList.remove('active');

            if (window.scrollY > 0) {
                document.querySelector('.header').classList.add('active');
            } else {
                document.querySelector('.header').classList.remove('active');
            };

        };
        if (isActive) {
            document.querySelector('.login-form-container').classList.add('active');
        } else {
            document.querySelector('.login-form-container').classList.remove('active');
        }
    })

    let login = (email, password, e) => {
        e.preventDefault()
        
        console.log(email, password)
        fetch(API_URL + "signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(response => response.json()).then(data => {
            console.log(data)
            if (data.accessToken) {
                localStorage.setItem("user", JSON.stringify(data));
                window.location.reload()
            }
        })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }

    function logout() {
        localStorage.removeItem("user");
        window.location.reload()
    }

    let register = (username, email, password, e) => {
        e.preventDefault()
        fetch(API_URL + "signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }).then(response => response.json()).then(data => {
            document.querySelector(".note").innerHTML = data.message
            console.log(data);
        })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }
    

    //   function getCurrentUser() {
    //     return JSON.parse(localStorage.getItem('user'));;
    //   }

    let menuClick = () => {
        console.log("menu click")
        document.querySelector('.menu-btn-cls').classList.toggle('fa-times');
        document.querySelector('.navbar').classList.toggle('active');
    }

    return (
        <>
            <header className="header">

                <div id="menu-btn" onClick={menuClick} className="fas fa-bars menu-btn-cls">
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <a href="/" className="logo"><img className="roblogo" src="/assets/reviews/LOGO.jpg" alt="" /></a>

                <nav className="navbar">
                    <a href="/">home</a>
                    <a href="/">vehicles</a>
                    <a href="/">brands</a>
                    <a href="/">reviews</a>
                    <a href="/">contact</a>
                </nav>

                <div id="login-btn" onClick={() => { token ? logout() : setIsActive(true) }}>
                    <button className="btn">{token ? "logout" : "login"}</button>
                    <i className="far fa-user"> <FontAwesomeIcon icon={faUser} /></i>
                </div>
                {!isSignup && <div className="login-form-container">

                    <span id="close-login-form" onClick={() => { setIsActive(false) }} className="fas fa-times">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>

                    <form action="" onSubmit={(e) => { login(email, password, e) }}>
                        <h3>user login</h3>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email" className="box" />
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" className="box" />
                        <p> forget your password <a href="/">click here</a> </p>
                        <input type="submit" value="Sign In" className="btn" />

                        <p> don't have an account </p>
                        <div className='create' onClick={(e) => {
                            e.preventDefault()
                            setIsSignup(true)
                        }} > create one</div>
                    </form>

                </div>}
                {
                    isSignup && <div className="login-form-container">

                        <span id="close-login-form" onClick={() => { setIsActive(false) }} className="fas fa-times">
                            <FontAwesomeIcon icon={faTimes} />
                        </span>

                        <form action="" onSubmit={(e) => { register(username, email, password, e) }} >
                            <h3>user login</h3>
                            <p className='note' style={{ color: "red" }}></p>
                            <input type="text" value={username} onChange={(e) => { setUserName(e.target.value) }} name='username' placeholder="User Name" className="box" />
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder="Email" className="box" />
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' placeholder="Password" className="box" />
                            <p> forget your password <a href="/">click here</a> </p>
                            <input type="submit" value="Sign Up" className="btn" />

                            <p> Already have an account? </p>
 
                            <div className='sign' onClick={(e) => {
                                e.preventDefault()
                                setIsSignup(false)
                            }}>sign in</div>
                        </form>

                    </div>
                }
            </header>

        </>
    );
}



export default Header;