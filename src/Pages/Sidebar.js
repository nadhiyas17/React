import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate =useNavigate();
  const handleinput =(event) =>{
        navigate('/')
  }
    const items=[
       
        {item:"Chicken Rolls"},
        {item:"Peri Peri Chicken"},
        {item:"Value Snackers"},
        {item:"Chicken Rolls"},
        {item:"Cool Drinks"},
        {item:"Chicken Buckets"},
        {item:"Biryani Buckets"},
        {item:"Box Meals"},
        {item:"Burgers"},
        {item:"French Fries"},
        {item:"Biryani Buckets"},
        {item:"Box Meals"},
        {item:"Burgers"},
        {item:"French Fries"},
 
]
     return (
    <div className='side'>
       {/* {items.map((item1,index)=>{  */}
         {/* return(  */}
            <ul>
                 {/* <a href='#{item1.item}'><li>{item1.item}</li></a> */}
                
                <NavLink  to="/peripage"> <p >Peri Peri Chicken</p> </NavLink>
                <NavLink  to="/rollspage"><p>Chicken Rolls</p></NavLink>
                <NavLink to="/burgerspage"><p>Burgers</p></NavLink>
                {/* <NavLink to="/drinkspage"><p>Cool Drinks</p></NavLink>  */}
                 <NavLink to ='/bucketpage'><p> Bucket Chicken</p></NavLink> 


            </ul>
           

         {/* )  */}
       {/* })}  */}
    </div>
  )
}

export default Sidebar
