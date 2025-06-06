import { useState } from 'react'
import './index.css';
import Header from '../moduls/Header';
import Bajiner from '../moduls/Bajiner';
import Mianal from '../moduls/Mianal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Bajiner />
    <Mianal />
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
