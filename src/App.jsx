
import './App.css'
import Count from './component/Count'
import Message from './component/Message'
import Welcome from './component/Welcome'
import List from './component/List'
import Form from './component/Form'
import FetchData from './component/FetchData'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import NotFound from './component/NotFound'
import About from './component/About'
import Company from './component/Company'
import Team from './component/Team'
import LiftStateUp from './component/LiftStateUp'
import CounterProvider from './context/CounterContext'
import CounterController from './controller/CounterController'
import CounterDisplay from './controller/CounterDisplay'
function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/list' element={<List />} />
        <Route path='/fetchData' element={<FetchData />} />
        <Route path='/lift' element={<LiftStateUp />} />
        <Route path='/about' element={<About />}>
          <Route path='company' element={<Company />} ></Route>
          <Route path='team' element={<Team />} ></Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes> */}
      <CounterProvider>
        <h1>This thi Global Counter useing context</h1>
        <CounterController />
        <CounterDisplay />
      </CounterProvider>
    </>
  )
}
export default App
