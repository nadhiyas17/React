import React from 'react'
import Sidebar from '../../Sidebar'
// import { Link } from 'react-router-dom'

function Burgerspage() {
  const rolls=[{
    itemName:"Burgers",
    itemImg:"images/burgers/B-1.jpg",
    Price:600,
    Qty:1
  },
  {
    itemName:"Burgers",
    itemImg:"images/burgers/b-2.jpg",
    Price:300,
    Qty:1
  },
  {
    itemName:"Burgers",
    itemImg:"images/burgers/b-3.jpg",
    Price:800,
    Qty:1
  },
  {
    itemName:"Burgers",
    itemImg:"images/burgers/b-4.jpg",
    Price:150,
    Qty:1
  },

]
  return (
    <section className="bucket shadow-lg w-100 p-2 " >
       <div className="row">
            <div className="col-3">
                <Sidebar/>  
              </div>  
           
<div className='col-9'>
      <h3 className="text-start mb-3 ">Burgers</h3>
    <div className='  d-flex '>
      {rolls.map((eachitem2)=>{
        return(
          <div className="card text-start ms-2 " >
  <img className="card-img-top img-thumbnail " src={eachitem2.itemImg} alt={eachitem2.itemImg}/>
  <div className="card-body">
    <h5 className="card-name">{eachitem2.itemName}</h5>
    <h5 className="card-price">&#8377;&nbsp;{eachitem2.Price}</h5>
    <p className="card-title text-info">Qty:&nbsp;{eachitem2.Qty}</p>


    <p className="card-text"> Lorem dolor perferendis </p>
    <button  className="btn btn-primary w-100 bg-black">Add to Cart</button>
    
</div>


          </div>
        )
      })}
    </div>
    </div>
    </div>
    </section>
  )
}

export default Burgerspage;

