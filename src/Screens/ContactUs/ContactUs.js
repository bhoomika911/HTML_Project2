import React from 'react'
import './ContactUs.module.css';
import topImage from './../../assets/top-img.png';

export default function ContactUs() {
    return (
        <div className="wrapper">
            <main>
                <div className= "contact-wrapper" >
                    {
                        [1,2,3,4,5,6,7,8,9,1,2,8,9,1].map(() => {
                            return (
                                <div className= "contact-menu-item" >
                                    <img src={topImage} className="contact-image" />
                                    <h3>Call</h3>
                                    <label>1-800-4-SCOTIA</label>

                                    <button>More Numbers</button>
                                </div>
                            );
                        })
                    } 
                </div>
            </main>
        </div>
    )
}
