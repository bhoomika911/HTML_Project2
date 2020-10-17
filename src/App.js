import React from 'react';
import './App.css';
import topImage from './assets/top-img.png';
import bottomImage from './assets/bottom-img.png';

function App() {
  return (
    <div className="wrapper">
        <div className="info-top">
            <img src={topImage} alt="banner" />
        </div>

        <div className="article-parent">
            <article>
                <div className="article-info">
                    <h2>Hey!!!</h2>
                    <p>Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum </p>
                    <p>Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum </p>
                </div>
                <div className="article-img">
                    <img src={bottomImage} alt="banner" />
                </div>
            </article>
        </div>

        <div className="article-parent">
                <article>
                    <div className="article-info">
                        <h2>Hey!!!</h2>
                        <p>Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum </p>
                        <p>Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum </p>
                    </div>
                    <div className="article-img">
                        <img src={bottomImage} alt="banner" />
                    </div>
                </article>
            </div>

            <div className="article-parent">
                    <article>
                        <div className="article-info">
                            <h2>Hey!!!</h2>
                            <p>Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum </p>
                            <p>Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum </p>
                        </div>
                        <div className="article-img">
                            <img src={bottomImage} alt="banner" />
                        </div>
                    </article>
                </div>
     </div>
  );
}

export default App;
