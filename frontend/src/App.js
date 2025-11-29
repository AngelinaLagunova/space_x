import './index.css';
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8000/';


function App() { 

  const [nav, setNav] = useState([]);
  const [advantages, setAdvantages] = useState([]);


  useEffect(() => {
    fetch(API_URL + "api/menu/")
      .then(response => response.json())
      .then(data => {
        setNav(data.slice(0, 7));
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch(API_URL + "api/advantages/")
      .then(response => response.json())
      .then(data => {
        setAdvantages(data.slice(0, 4));
      })
      .catch(error => console.error(error));
  }, []);

  const navGeneration = nav.map((item, index) =>
    <a href={item.url} key={index}>{item.name}</a>
  );

  const advantagesGeneration = advantages.map((item, index) =>
      <div className={"advantagesItem" + index} key={index}>
        <div className="advantagesText">{item.text_above}</div>
        {<div className="advantagesValue" dangerouslySetInnerHTML={{ __html: item.value }} />}
        <div className="advantagesText">{item.text_below}</div>
      </div>
  );


  return (
    <>
    <nav className="menu">{navGeneration}</nav>
    <hr/>
    <div className='main'>
      <div className="button-container">
        <svg width="600" height="80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="cutMask">
              <rect width="100%" height="100%" fill="white"/>
              <circle cx="93%" cy="93%" r="71" fill="black" />
            </mask>
            <linearGradient id="grad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="rgba(255, 66, 8, 1)" />
              <stop offset="100%" stop-color="white" />
            </linearGradient>
          </defs>
          
          <text x="0" y="70" font-size="4.3em" font-family="Arial" fill="url(#grad)" font-weight="bold" mask="url(#cutMask)">
            ПУТЕШЕСТВИЕ
          </text>
        </svg>
        <div className='text'>
          на красную планету
        </div>
        <div class="button">
            <img src="button2.png" alt="Кнопка"/>
            <a href="/#" class="overlay-text">Начать путешествие</a>
        </div>
      </div>
      <div className="advantagesBlock">{advantagesGeneration}</div>
    </div>
    </>
  );
}

export default App;
