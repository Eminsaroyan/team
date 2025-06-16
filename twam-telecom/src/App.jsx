import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../moduls/Header';
import Cart from '../moduls/Cart';
import Anhatner from '../moduls/Anhatner';
import Business from '../moduls/Business';
import Eshop from '../moduls/Eshop';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/anhatner" replace />} />
        <Route path="/anhatner" element={<Anhatner />} />
        <Route path="/business" element={<Business />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
