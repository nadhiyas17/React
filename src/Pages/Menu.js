import React from 'react'
import Peri from './Sidebar/Peri'
// import Snackers from './Sidebar/Burgers'
import Bucket from './Sidebar/Bucket'
import Rolls from '../Pages/Sidebar/Rolls'
// import Drinks from './Sidebar/Drinks'
import Burgers from './Sidebar/Burgers'


function Menu() {
  return (
    <div>
     <Peri/> 
     <Rolls/>
     <Burgers/>
     <Bucket/> 
    {/* <Drinks/> <br /> <br /><br /><br /><br /> */}
     
    </div>
  )
}

export default Menu
