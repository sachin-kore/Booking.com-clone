import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';
import { Hotel } from './pages/Hotel/Hotel';
import { useState } from 'react';
import { Callback } from './Callback';


function App() {

  const [UIcolor, setUIColor] = useState(null);

  //Callback function which gets color from child component
  const getColor = (color) => {
    setUIColor(color);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotel' element={<List />} />
          <Route path='/hotel/:id' element={<Hotel />} />
        </Routes>
      </BrowserRouter>
      <div>
        <div className='A--_color_Container' style={{
          background: `${UIcolor}`
        }}>

        </div>
        <Callback getColor={getColor} />
      </div>
    </>
  );
}

export default App;
