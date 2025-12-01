import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainApp(){
  return(
    <Router>
      <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/#" element={<App/>}/>
      </Routes>
    </Router>
  )
}



root.render(
  <MainApp/>
);


