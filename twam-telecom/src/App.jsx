import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '../moduls/Header';
import Cart from '../moduls/Cart';
import Anhatner from '../moduls/Anhatner';
import Business from '../moduls/Business';
import Eshop from '../moduls/Eshop';
import Smartphones from '../moduls/Smartphones';
import Numbers from '../moduls/Numbers';
import Equipment from '../moduls/Equipment';
import Acs from '../moduls/Acs';
import TopNumbers from '../moduls/Top-numbers';
import Offers from '../moduls/Offers';
import Teamtv from '../moduls/Teamtv';
import Myteam from '../moduls/Myteam';
import Teampay from '../moduls/Teampay';
import Teamenergy from '../moduls/Teamenergy';
import Teamhavelvac from '../moduls/Teamhavelvac'

function App() {
  const location = useLocation();
  const hideHeaderOnPaths = ['/eshop', '/smartphones', '/numbers', '/equipment', '/acs', '/top-numbers', '/offers'];

  const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/anhatner" replace />} />
        <Route path="/anhatner" element={<Anhatner />} />
        <Route path="/business" element={<Business />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/acs" element={<Acs />} />
        <Route path="/top-numbers" element={<TopNumbers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/teamtv" element={<Teamtv />} />
        <Route path="/myteam" element={<Myteam />} />
        <Route path="/teampay" element={<Teampay />} />
        <Route path="/teamenergy" element={<Teamenergy />} />
         <Route path="/teamhavelvac" element={<Teamhavelvac />} />
      </Routes>
    </>
  );
}

export default App;
