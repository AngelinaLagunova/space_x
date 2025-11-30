import './index.css';
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8000/';


function App() { 

  const [nav, setNav] = useState([]);
  const [advantages, setAdvantages] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

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
    <div className='header'>
      <img src="logo.png" alt="logo"/>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>{navGeneration}</nav>
    </div>
    <hr/>
    <div className='main'>
      <div className="button-container">
        <div className='text'>
          <span className='big_text'>ПУТЕШЕСТВИЕ</span><br/>
          на красную планету
        </div>
        <div className="button">
            <img src="button2.png" alt="Кнопка"/>
            <a href="/#" className="overlay-text">Начать путешествие</a>
        </div>
      </div>
      <div className="advantagesBlock">{advantagesGeneration}</div>
    </div>
    </>
  );
}

export default App;
