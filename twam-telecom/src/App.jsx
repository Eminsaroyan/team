import { useState } from 'react'
import './index.css';
import Header from '../moduls/Header';
import Bajiner from '../moduls/Bajiner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Bajiner />
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
      <div className='mt-[60px] flex items-center justify-around'>
        <div className='flex flex-col items-start'>
          <h1 className='text-[60px] mb-[20px]'>Հավելված My Team</h1>
          <p className='text-[20px] mb-[20px] '>Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար</p>
          <p className='text-[20px] mb-[20px] w-[580px]'>Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից</p>
          <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="" className='mb-[20px]' />
          <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="" />
        </div>
        <img src="https://www.telecomarmenia.am/img/redesign/app-img.png" alt="" className='w-[30%]' />
      </div>
      <div className='bg-[#01415f] flex text-[#ffffff] items-start justify-evenly pt-[30px] pb-[100px]'>
        <img src="https://www.telecomarmenia.am/img/logo-light.svg?v=1" alt="" />
        <div className='leading-[32px] cursor-pointer'>
          <h2 className='mb-[12px] text-[#c4c0c0]'>Ընկերության մասին</h2>
          <p className='text-[14px] text-[#c4c0c0]'>Մեր մասին</p>
          <p className='text-[14px] text-[#c4c0c0]'>Կապի թանգարան</p>
          <p className='text-[14px] text-[#c4c0c0]'>Նորություններ</p>
          <p className='text-[14px] text-[#c4c0c0] '>Աշխատանք Տելեկոմ Արմենիայում</p>
          <p className='text-[14px] text-[#c4c0c0]'>Արդյունքներ և հաշվետվություններ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Գործարար Էթիկա և Կոմպլայենս</p>
          <p className='text-[14px] text-[#c4c0c0]'>Կայուն զարգացում</p>
          <p className='text-[14px] text-[#c4c0c0]'>Բաժնետերերին</p>
        </div>
        <div className='leading-[30px] cursor-pointer'>
          <h2 className='mb-[12px]'>Տեղեկատվություն</h2>
          <p className='text-[14px text-[#c4c0c0]]'>Ընդհանուր դրույթներ և պայմաններ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Անվտանգություն</p>
          <p className='text-[14px] text-[#c4c0c0]'>E-shop պայմաններ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Ապառիկ վաճառքի պայմաններ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Առաքման պայմաններ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Վաճառքի և սպասարկման կենտրոններ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Ծածկույթ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Բջջային ցանցի ծածկույթ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Team ինտերնետի հասանելիության ծածկույթ</p>
          <p className='text-[14px] text-[#c4c0c0]'>Օգտակար փաստաթղթեր</p>
          <p className='text-[14px] text-[#c4c0c0]'>Գործընկերներին և մատակարարներին</p>
          <p className='text-[14px] text-[#c4c0c0]'>Գաղտնիության քաղաքականություն</p>
          <p className='text-[14px] text-[#c4c0c0]'>ՀՀ մարզերի կոդեր</p>
        </div>
        <div className='leading-[30px] cursor-pointer'>
          <h2 className='mb-[12px]'>Team հավելվածներ</h2>
          <p className='text-[14px] text-[#c4c0c0]'>TeamTV</p>
          <p className='text-[14px] text-[#c4c0c0]'>My Team</p>
          <p className='text-[14px] text-[#c4c0c0]'>Team Pay</p>
          <p className='text-[14px] text-[#c4c0c0]'>Team Energy</p>
        </div>
      </div>
      <div className='flex justify-center bg-[#022739] text-[#ffffff] pt-[20px] pb-[20px]'>
        <p>Team © 2025</p>
      </div>
    </>
  )
}


export default App
