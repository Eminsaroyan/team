import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "../moduls/Header";
import Cart from "../moduls/Cart";
import Anhatner from "../moduls/Anhatner";
import Business from "../moduls/Business";
import Eshop from "../moduls/Eshop";
import Smartphones from "../moduls/Smartphones";
import Numbers from "../moduls/Numbers";
import Equipment from "../moduls/Equipment";
import Acs from "../moduls/Acs";
import Offers from "../moduls/Offers";
import Teamtv from "../moduls/Teamtv";
import Myteam from "../moduls/Myteam";
import Teampay from "../moduls/Teampay";
import Teamenergy from "../moduls/Teamenergy";
import Teamhavelvacner from "../moduls/Teamhavelvacner";
import Mermasin from "../moduls/Mermasin";
import Norutyunner from "../moduls/Norutyunner";
import Ashxatanq from "../moduls/Ashxatanq";
import Hashvetvutyunner from "../moduls/Hashvetvutyunner";
import Ethics from "../moduls/Ethics";
import Zargacum from "../moduls/Zargacum";
import Bazhneter from "../moduls/Bazhneter";
import Museum from "../moduls/Museum";
import Paymaner from "../moduls/Paymaner";
import Anvtangutyun from "../moduls/Anvtangutyun";
import Eshoppaymaner from "../moduls/Eshoppaymaner";
import Aparik from "../moduls/Aparik";
import Arakum from "../moduls/Arakum";
import Vacharqi from "../moduls/Vacharqi-kentronner";
import Tackuyt from "../moduls/Tackuyt";
import Bjj from "../moduls/Bjjnayin-tsakuyt";
import Internet from "../moduls/Internet-tsakuyt";
import Gaxtniutyun from "../moduls/Gaxtniutyun";
import Marz from "../moduls/Marzeri-koder";
import Gorcarqner from "../moduls/Gorcnqer-matakararner";
import Vacharner from "../moduls/Vacharner";
import Gordznker from "../moduls/Gordznker";
import Pastatuxt from "../moduls/Ogtagorci-pastatuxte";
import Etransport from "../moduls/E-transport";
import Gamepads from "../moduls/Gamepads";
import Routers from "../moduls/Routers";
import Laptops from "../moduls/Laptops-tablets";
import Smarthome from "../moduls/Smart-home";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const hideHeaderOnPaths = [
    "/eshop",
    "/smartphones",
    "/numbers",
    "/equipment",
    "/acs",
    "/top-numbers",
    "/offers",
    "/e-transport",
    "/gamepads",
    "/routers",
    "/laptops-tablets",
    "/smart-home"
  ];

  const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <ScrollToTop />
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
        <Route path="/offers" element={<Offers />} />
        <Route path="/teamtv" element={<Teamtv />} />
        <Route path="/myteam" element={<Myteam />} />
        <Route path="/teampay" element={<Teampay />} />
        <Route path="/teamenergy" element={<Teamenergy />} />
        <Route path="/teamhavelvacner" element={<Teamhavelvacner />} />
        <Route path="/mermasin" element={<Mermasin />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/norutyunner" element={<Norutyunner />} />
        <Route path="/ashxatanq" element={<Ashxatanq />} />
        <Route path="/hashvetvutyunner" element={<Hashvetvutyunner />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/zargacum" element={<Zargacum />} />
        <Route path="/bazhneter" element={<Bazhneter />} />
        <Route path="/paymaner" element={<Paymaner />} />
        <Route path="/anvtangutyun" element={<Anvtangutyun />} />
        <Route path="/eshoppaymaner" element={<Eshoppaymaner />} />
        <Route path="/aparik" element={<Aparik />} />
        <Route path="/arakum" element={<Arakum />} />
        <Route path="/vacharqi-kentronner" element={<Vacharqi />} />
        <Route path="/tackuyt" element={<Tackuyt />} />
        <Route path="/bjjnayin-tsakuyt" element={<Bjj />} />
        <Route path="/internet-tsakuyt" element={<Internet />} />
        <Route path="/gaxtniutyun" element={<Gaxtniutyun />} />
        <Route path="/marzeri-koder" element={<Marz />} />
        <Route path="/gorcnqer-matakararner" element={<Gorcarqner />} />
        <Route path="/vacharner" element={<Vacharner />} />
        <Route path="/gordznker" element={<Gordznker />} />
        <Route path="/ogtagorci-pastatuxte" element={<Pastatuxt />} />
        <Route path="/e-transport" element={<Etransport />} />
        <Route path="/gamepads" element={<Gamepads />} />
        <Route path="/routers" element={<Routers />} />
        <Route path="/laptops-tablets" element={<Laptops />} />
        <Route path="/smart-home" element={<Smarthome />} />
      </Routes>
    </>
  );
}

export default App;
