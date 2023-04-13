
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import { Home } from './components/home/home';


function App() {
  return (
    <>
      
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    
    </>
  );
}


export default App;
