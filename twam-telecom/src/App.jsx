import { useState } from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <p>Անհատներին</p>
        <p>Բիզնես</p>
        <p>E-shop</p>
      </div>
      <div>
        <p>Հայ</p>
        <p>Рус</p>
        <p>Eng</p>
        <p>Անձնական գրասենյակ</p>
      </div>
    </div>

  )
}

export default App
