import { useState } from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[45px] flex justify-around bg-[#01415f] text-[#ffffff]">
        <div className="flex items-center ">
          <p className='m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000'>Անհատներին</p>
          <p className='m-[5px] p-[12px]  hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000'>Բիզնես</p>
          <p className='m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000'>E-shop</p>
        </div>
        <div className="flex items-center ">
          <p className='m-[10px] border-l pl-[20px] border-r pr-[20px] border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000'>Հայ</p>
          <p className='m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000'>Рус</p>
          <p className='m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000'>Eng</p>
          <p className='m-[5px] p-[12px] cursor-pointer hover:bg-[#0A6C9F] transition-colors duration-1000'>Անձնական գրասենյակ</p>
        </div>
      </div>
      <nav className='flex justify-evenly items-center m-[10px]'>
        <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="" className='cursor-pointer' />
        <p className='cursor-pointer'>Սակագներ</p>
        <p className='cursor-pointer'>Ինտերնետ</p>
        <p className='cursor-pointer'>Ծառայություններ</p>
        <p className='cursor-pointer'>Ռոումինգ</p>
        <p className='cursor-pointer'>Առցանց խանութ</p>
        <p className='cursor-pointer'>Առաջարկներ</p>
        <p className='cursor-pointer'>Օգնություն</p>
      </nav>
      <div>
        <div className="w-[500px] p-[60px] bg-[#01415f] ">
          <p className=''>Բջջային կապ</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}


export default App
