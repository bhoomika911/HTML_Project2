import React from 'react'
import './Dashboard.module.css';
import topImage from './../../assets/top-img.png';

export default function Dashboard() {
    return (
        <div className="wrapper">
            <header>
            </header>

            <main>
                <div className= "left-menu" >
                    {
                        [1,2,3,4,5,6,7,8,9,1,2,8,9,1].map(() => {
                            return (
                                <div className= "menu-item" >
                                </div>
                            );
                        })
                    } 
                </div>
                <div className= "right-section" >
                    <div className= "top-section" >
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(() => {
                            return (
                                <div className= "scroll-item" >
                                </div>
                            );
                        })
                    }
                    </div>
                    <div className= "bottom-section" >
                    </div>
                </div>
            </main>
        </div>
    )
}
