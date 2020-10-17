import React from 'react'
import './Home.module.css';
import topImage from './../../assets/top-img.png';

export default function Home() {
    return (
        <div className="wrapper">
            <header>
                <a className = "logo-image" href="">SOFTWARE</a>

                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Details</a></li>
                    </ul>

                    <a href="" className="cases">Cases</a>
                </nav>
            </header>

            <main>
                <img src={topImage} className="banner-image"/>

                <div className="item-list">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Details</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Details</a></li>
                    </ul>
                </div>

                <div className="contact-section">
                    <div className="center-section">
                        <h3>Contact Us</h3>
                        <a>+1- 437 688 5052</a>
                        <a>Email: xyz@gmail.com</a>
                    </div>
                </div>

                <div className="about-list">
                    <ul className="about-link">
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Details</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>

                    <ul className="about-share">
                        <li><a href=""><img src={topImage} className="about-image"/></a></li>
                        <li><a href=""><img src={topImage} className="about-image"/></a></li>
                        <li><a href=""><img src={topImage} className="about-image"/></a></li>
                    </ul>
                </div>
            </main>

            <footer>
            </footer>
        </div>
    )
}
