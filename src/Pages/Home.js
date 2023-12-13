import React from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'

function Home() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-3">
                <Sidebar/>
                
            </div>
             
                <div className="menu col-9">
                    <Menu/>
                
            </div>
        </div>
      
    </div>
    
  )
}

export default Home;
