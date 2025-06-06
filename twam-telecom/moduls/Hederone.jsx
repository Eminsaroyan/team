import React, { useState, useEffect } from 'react';

const Header = () => {
    const getInitialLanguage = () => {
        return localStorage.getItem('language') || 'Հայ';
    };

    const [language, setLanguage] = useState(getInitialLanguage());

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="h-[45px] flex justify-around items-center bg-[#01415f] text-[#ffffff]">
            <div className="flex items-center">
                <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">Անհատներին</p>
                <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">Բիզնես</p>
                <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000 flex items-center">
                    <img src="./eshop-icon.svg" alt="" className="mr-[12px]" /> E-shop
                </p>
            </div>

            <div className="flex items-center">
                {['Հայ', 'Рус', 'Eng'].map((lang) => (
                    <p
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`m-[10px] border-r pr-[20px] last:border-r-0 border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000 ${language === lang ? 'text-[#FF0000]' : ''
                            }`}
                    >
                        {lang}
                    </p>
                ))}
                <p className="m-[5px] p-[12px] cursor-pointer hover:bg-[#0A6C9F] transition-colors duration-1000">Անձնական գրասենյակ</p>
            </div>
        </div>
    );
};

export default Header;
