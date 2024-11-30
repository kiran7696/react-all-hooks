import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ComponentUseState from './all hooks/usestate/ComponentUseState'
import ComponentUseEffect from './all hooks/useeffect/ComponentUseEffect'
import ComponentUseMemo from './all hooks/usememo/ComponentUseMemo'
import ComponentUseCallBack from './all hooks/usecallback/ComponentUseCallBack'
import ComponentUseReducer from './all hooks/usereducer/ComponentUseReducer'
import ComponentUseRef from './all hooks/useref/ComponentUseRef'
import CustomHooks from './all hooks/customHooks/CustomHooks'
import HOC from './higherOrderComponent/HOC'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ComponentUseState />}/>
        <Route path='/use-effect' element={<ComponentUseEffect />}/>
        <Route path='/use-memo' element={<ComponentUseMemo />}/>
        <Route path='/use-callback' element={<ComponentUseCallBack />}/>
        <Route path='/use-usereducer' element={<ComponentUseReducer />}/>
        <Route path='/use-useref' element={<ComponentUseRef />}/>
        <Route path='/use-customhook' element={<CustomHooks />}/>
        <Route path='/hoc' element={<HOC />}/>
      </Routes>
    </div>
  )
}

export default App
