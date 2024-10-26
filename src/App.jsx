
import { useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Banner from './Components/Banner/Banner'
import Buttons from './Components/Buttons/Buttons'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
import Ender from './Components/Ender/Ender'

function App() {
   
  const [isActive, setIsActive] = useState({
    cart: true,
    status:"cart"
  })

const handleIsActiveState = (status) =>{
  if (status== "cart"){
    setIsActive({
      cart: true,
    status:"Available"
    })
  }
  else{
    setIsActive({
      cart: false,
    status:"Selected"
    })
  }
}
 
  return (
    <>
      
       
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='w-11/12 mx-auto flex justify-between pt-6'>
        <AvailablePlayers></AvailablePlayers>
         <Buttons isActive={isActive} handleIsActiveState={handleIsActiveState}></Buttons>
      </div>
      <Players></Players>

     <div className='w-8/12 mx-auto mt-32 border-2 rounded-xl'>
     <Footer></Footer>
     </div>

     <div>
      <Ender></Ender>
     </div>
      
      
    </>
  )
}

export default App
