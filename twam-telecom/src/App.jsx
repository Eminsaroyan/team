import { useState } from 'react'
import './index.css';
import Header from '../moduls/Header';
import Bajiner from '../moduls/Bajiner';
import Mianal from '../moduls/Mianal';
import Lrahos from '../moduls/Lrahos';
import Application from '../moduls/Application';
import Fut from '../moduls/Fut';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
      <Bajiner />
      <Mianal />
      <Lrahos />
      <Application />
      <Fut />
    </>
  )
}


export default App
