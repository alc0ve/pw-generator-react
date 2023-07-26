import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Index from './pages/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="App">
        <Index/>
      </div>
    </>
  )
}

export default App
