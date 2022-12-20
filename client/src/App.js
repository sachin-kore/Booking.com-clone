import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';
import { Hotel } from './pages/Hotel/Hotel';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<List />} />
        <Route path='/hotel/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
