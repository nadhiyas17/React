import React from 'react'
import { Link } from 'react-router-dom'


function Bucket() {
  const bucket=[{
    itemName:"Bucket Chicken",
    itemImg:"images/buckets/b_2.jpg",
    Price:150,
    Qty:1
  },
  {
    itemName:"Bucket Chicken",
    itemImg:"images/buckets/b_3.jpg",
    Price:200,
    Qty:1
  },
  {
    itemName:"Bucket Chicken",
    itemImg:"images/buckets/b_4.jpg",
    Price:600,
    Qty:1
  },
  {
    itemName:"Bucket Chicken",
    itemImg:"images/buckets/b_5.jpg",
    Price:600,
    Qty:1
  },

]
  return (
    <section className="bucket shadow-lg w-100 p-2 " >
    <h3 className="text-start mb-3 ">Bucket Chicken</h3>

    <div className='d-flex '>
      {bucket.map((eachitem1)=>{
        return(
          <div className="card text-start ms-2 " >
  <img className="card-img-top img-thumbnail " src={eachitem1.itemImg} alt={eachitem1.itemImg}/>
  <div className="card-body">
    <h5 className="card-name">{eachitem1.itemName}</h5>
    <h5 className="card-price">&#8377;&nbsp;{eachitem1.Price}</h5>
    <p className="card-title text-info">Qty:&nbsp;{eachitem1.Qty}</p>


    <p className="card-text"> Lorem dolor perferendis </p>
    <button  className="btn btn-primary w-100 bg-black">Add to Cart</button>
    
</div>


          </div>
        )
       })} 
      <button className=" more bg-dark">More</button>
    </div>
    </section>
  )
}

export default Bucket;
