import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
export const peri=[{
  itemName:"Peri Chicken Spicy",
  itemImg:"images/periperi/pp_1.jpg",
  Price:600,
  Qty:1
},
{
  itemName:"Peri Chicken Tandoori",
  itemImg:"images/periperi/pp_2.jpg",
  Price:300,
  Qty:1
},
{
  itemName:"Peri Chicken Barbeque",
  itemImg:"images/periperi/pp_3.jpg",
  Price:800,
  Qty:1
},
{
  itemName:"Peri Peri Starter ",
  itemImg:"images/periperi/pp_5.jpg",
  Price:150,
  Qty:1
},
{
  itemName:"Peri Chicken Spicy",
  itemImg:"images/periperi/pp_1.jpg",
  Price:600,
  Qty:1
},
{
  itemName:"Peri Chicken Tandoori",
  itemImg:"images/periperi/pp_2.jpg",
  Price:300,
  Qty:1
},
{
  itemName:"Peri Chicken Barbeque",
  itemImg:"images/periperi/pp_3.jpg",
  Price:800,
  Qty:1
},
{
  itemName:"Peri Peri Starter ",
  itemImg:"images/periperi/pp_5.jpg",
  Price:150,
  Qty:1
},

]

function Peri() {
 
const firstfive=peri.slice(0,5)
  return (

    <section className="periperi shadow-lg w-100 p-2 " >
      
    <h3 className="text-start mb-3 ">Peri Peri Chicken</h3>
    <div className='d-flex'>
      {firstfive.map((eachitem)=>{

        return(
          <div className="card text-start ms-2 " >
  <img className="card-img-top img-thumbnail " src={eachitem.itemImg} alt={eachitem.itemImg}/>
  <div className="card-body">
    <h5 className="card-name">{eachitem.itemName}</h5>
    {/* <h5 className="card-price">&#8377;&nbsp;{eachitem.Price}</h5> */}
    {/* <p className="card-title text-info">Qty:&nbsp;{eachitem.Qty}</p> */}


    {/* <p className="card-text"> Lorem dolor perferendis </p> */}
    {/* <button  className="btn btn-primary w-100 bg-black">Add to Cart</button> */}
    
</div>


          </div>
        )
      })}
      <Link to='/peripage' className=" more bg-dark">More</Link>
    </div>
    
    
    </section>
  )
}

export default Peri
