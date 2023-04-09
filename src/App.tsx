import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTable from './components/BasicTable'
import SortingTable from './components/SortingTable'
import FilteringTable from './components/FilteringTable'
import 'regenerator-runtime/runtime';
import PaginationTable from './components/PaginationTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  )
}

export default App
