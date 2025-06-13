import React, { useState, useEffect } from 'react';
import { useCartStore } from './store';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  const getInitialLanguage = () => localStorage.getItem('language') || 'Հայ';
  const [language, setLanguage] = useState(getInitialLanguage());

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div className="h-[45px] flex justify-around items-center bg-[#01415f] text-[#ffffff]">
      <div className="flex items-center">
        <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">
          Անհատներին
        </p>
        <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">
          Բիզնես
        </p>
        <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000 flex items-center">
          <img src="./eshop-icon.svg" alt="" className="mr-[12px]" />
          E-shop
        </p>
      </div>

      <div className="flex items-center">
        {['Հայ', 'Рус', 'Eng'].map((lang) => (
          <p
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`m-[10px] border-r pr-[20px] last:border-r-0 border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000 ${language === lang ? 'text-[#FF0000]' : ''
              }`}
          >
            {lang}
          </p>
        ))}
        <p className="m-[5px] p-[12px] cursor-pointer hover:bg-[#0A6C9F] transition-colors duration-1000">
          Անձնական գրասենյակ
        </p>

        <Link to="/Cart" className="relative ml-4">
          <ShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
