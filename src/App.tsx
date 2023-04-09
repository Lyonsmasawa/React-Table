import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTable from './components/BasicTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <BasicTable />
    </div>
  )
}

export default App
