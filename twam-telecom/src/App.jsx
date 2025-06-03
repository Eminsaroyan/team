import { useState } from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[45px] flex justify-around bg-[#2c3843] text-[#ffffff]">
        <div className="flex items-center ">
          <p className='m-[5px] p-[12px] hover:bg-[#455666] cursor-pointer transition-colors duration-1000'>Անհատներին</p>
          <p className='m-[5px] p-[12px] hover:bg-[#455666] cursor-pointer transition-colors duration-1000'>Բիզնես</p>
          <p className='m-[5px] p-[12px] hover:bg-[#455666] cursor-pointer transition-colors duration-1000'>E-shop</p>
        </div>
        <div className="flex items-center ">
          <p className='m-[10px] border-l pl-[20px] border-r pr-[20px] border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000'>Հայ</p>
          <p className='m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000'>Рус</p>
          <p className='m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000'>Eng</p>
          <p className='m-[5px] p-[12px] cursor-pointer hover:bg-[#455666] transition-colors duration-1000'>Անձնական գրասենյակ</p>
        </div>
      </div>
    </>
  )
}


export default App
