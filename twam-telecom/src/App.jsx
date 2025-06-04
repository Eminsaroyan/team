import { useState } from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[45px] flex justify-around items-center bg-[#01415f] text-[#ffffff]">
        <div className="flex items-center">
          <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">Անհատներին</p>
          <p className="m-[5px] p-[12px]  hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000">Բիզնես</p>
          <p className="m-[5px] p-[12px] hover:bg-[#0A6C9F] cursor-pointer transition-colors duration-1000 flex items-center"><img src="./eshop-icon.svg" alt="" className="mr-[12px] " /> E-shop</p>
        </div>
        <div className="flex items-center ">
          <p className="m-[10px] border-l pl-[20px] border-r pr-[20px] border-[#757575] cursor-pointer hover:text-[#FF0000] transition-colors duration-1000">Հայ</p>
          <p className="m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000">Рус</p>
          <p className="m-[10px] border-r pr-[20px] border-[#757575]  cursor-pointer hover:text-[#FF0000] transition-colors duration-1000">Eng</p>
          <p className="m-[5px] p-[12px] cursor-pointer hover:bg-[#0A6C9F] transition-colors duration-1000">Անձնական գրասենյակ</p>
        </div>
      </div>
      <nav className='flex justify-evenly items-center m-[10px]'>
        <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="" className='cursor-pointer' />
        <p className="cursor-pointer">Սակագներ</p>
        <p className="cursor-pointer">Ինտերնետ</p>
        <p className="cursor-pointer">Ծառայություններ</p>
        <p className="cursor-pointer">Ռոումինգ</p>
        <p className="cursor-pointer">Առցանց խանութ</p>
        <p className="cursor-pointer">Առաջարկներ</p>
        <p className="cursor-pointer">Օգնություն</p>
      </nav>
      <div className="grid grid-cols-2 justify-items-center gap-4 mt-[30px] m-[90px]">
        <div className="group flex justify-between items-start w-[600px] pl-[30px] bg-[#01415f] rounded-[12px] mb-[10px] cursor-pointer">
          <p className="text-[#ffffff] mt-[12px] text-[30px] font-[900] font-serif group-hover:text-[#FF0000] transition-colors duration-300">Բջջային կապ</p>
          <img src="https://www.telecomarmenia.am/images/promo/1/16509682370213.png" alt="" className="rounded-[12px] object-cover" />
        </div>
        <div className="group flex justify-between items-start w-[600px] pl-[30px] bg-[#01415f] rounded-[12px] mb-[10px] cursor-pointer">
          <p className="text-[#ffffff] mt-[12px] text-[30px] font-[900] font-serif group-hover:text-[#FF0000] transition-colors duration-300">Ֆիքսված կապ</p>
          <img src="https://www.telecomarmenia.am/images/promo/1/1650969068409.png" alt="" className="rounded-[12px] object-cover" />
        </div>
        <div className="group flex justify-between items-start w-[600px] pl-[30px] bg-[#01415f] rounded-[12px] cursor-pointer">
          <p className="text-[#ffffff] mt-[12px] text-[30px] font-[900] font-serif group-hover:text-[#FF0000] transition-colors duration-300">Հավելվածներ</p>
          <img src="https://www.telecomarmenia.am/images/promo/1/16509690498367.png" alt="" className="rounded-[12px] object-cover" />
        </div>
        <div className="group flex justify-between items-start w-[600px] pl-[30px] bg-[#01415f] rounded-[12px] cursor-pointer">
          <p className="text-[#ffffff] mt-[12px] text-[30px] font-[900] font-serif group-hover:text-[#FF0000] transition-colors duration-300">Ինտերնետ և TV</p>
          <img src="https://www.telecomarmenia.am/images/promo/1/16510462295535.png" alt="" className="rounded-[12px] object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-[30px] pb-[40px] bg-[#01415f] text-[#ffffff] ">
        <h1 className='text-[65px] mb-[12px] font-[900]'>Դարձեք Team բաժանորդ</h1>
        <p className=' mb-[23px] font-[900] font-serif'>Միացե՛ք մեզ ձեր համարով և օգտվեք Team-ի բոլոր առավելություններից:</p>
        <button className='pt-[15px] pb-[15px] pl-[100px] pr-[100px] bg-[#FF0000] font-[900] text-[15px] text-[#ffffff] rounded-[12px] border-none cursor-pointer'>Միանալ</button>
      </div>
      <div className="flex flex-col items-center mt-[40px]">
        <h1 className="text-[32px] font-bold mb-[20px]">Լրահոս</h1>
        <div className="grid grid-cols-3  gap-[20px] w-full max-w-[1200px] px-[20px]">
          <div className="flex flex-col items-start border border-[#9E9E9E] rounded-[12px] p-[12px] ">
            <img src="https://www.telecomarmenia.am/images/news/1/17478128501455.jpeg" alt="" className="w-full rounded-[12px]" />
            <p className="mt-[6px] text-[#9E9E9E] text-[11px]">21 մայիս</p>
            <p className="text-[18px] font-medium mt-[6px]">
              Team Telecom Armenia-ն Տավուշում ամբողջովին վերազինել է բջջային ցանցը
            </p>
          </div>
          <div className="flex flex-col items-start border border-[#9E9E9E] rounded-[12px] p-[12px] ">
            <img src="https://www.telecomarmenia.am/images/news/1/17474608108675.png" alt="" className="w-full rounded-[12px] object-cover" />
            <p className="mt-[6px] text-[#9E9E9E] text-[11px]">16 մայիս</p>
            <p className="text-[18px] font-medium mt-[6px]">
              Արի՛ ժամանակի միջով ճամփորդելու. Team-ի Կապի թանգարանը միացել է թանգարանային տոներին
            </p>
          </div>
          <div className="flex flex-col items-start border border-[#9E9E9E]  rounded-[12px] p-[12px]">
            <img src="https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg" alt="" className="w-full rounded-[12px] " />
            <p className="mt-[6px] text-[#9E9E9E] text-[11px]">30 ապրիլ</p>
            <p className="text-[18px] font-medium mt-[6px]">
              Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք...
            </p>
          </div>

        </div>
      </div>

    </>
  )
}


export default App
