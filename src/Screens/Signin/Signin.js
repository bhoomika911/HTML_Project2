import React from 'react'
import './Signin.module.css';
import logo from './../../assets/logo.jpg';

export default function Signin() {
    return (
        <div className="wrapper">
            <div className="white-view">
                <div className="lock-container">
                        <label>L</label>
                </div>
                <div className="center-view">
                    
                    <center><h2>Welcome to</h2></center>
                    <img src={logo} />
                    <div className="input-conainer">
                        <i class="fas fa-clock"></i>
                        <input 
                            type="text"
                            placeholder="Username or card number"
                         />
                    </div>

                    <div className="input-conainer">
                        <input type="text" 
                        placeholder="Password" 
                        />
                    </div>

                    <button>Sigin in</button>

                    <a href="#">Need help signing in? ></a>
                </div>
            </div>
        </div>
    )
}
