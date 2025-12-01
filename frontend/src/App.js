import './index.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// const API_URL = 'http://176.113.83.129:8000/';
const API_URL = 'http://127.0.0.1:8000/';


function App() { 

  const [nav, setNav] = useState([]);
  const [advantages, setAdvantages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Свертка меню
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Получение данных из API
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

  // Заполнение меню элементами из БД
  const navGeneration = nav.map((item, index) =>
    <Link className="nav-link" to={item.url} key={index}>{item.name}</Link>
  );

  // Заполнение преимуществ элементами из БД
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
          <span className='big-text'>ПУТЕШЕСТВИЕ</span><br/>
          на красную планету
        </div>
        <div className="button">
            <img src="button.png" alt="Кнопка"/>
            <Link to="/#" className="overlay-text">Начать путешествие</Link>
        </div>
      </div>
      <div className="advantagesBlock">{advantagesGeneration}</div>
    </div>
    </>
  );
}

export default App;
