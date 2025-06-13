import { Routes, Route } from 'react-router-dom';

import './index.css';
import Header from '../moduls/Header';
import Info from '../moduls/Info';
import Bajiner from '../moduls/Bajiner';
import Apranq from '../moduls/Apranq';
import Mianal from '../moduls/Mianal';
import Lrahos from '../moduls/Lrahos';
import Application from '../moduls/Application';
import Fut from '../moduls/Fut';
import Cart from '../moduls/Cart'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Info />
              <Bajiner />
              <Apranq />
              <Mianal />
              <Lrahos />
              <Application />
              <Fut />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
