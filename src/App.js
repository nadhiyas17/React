// import logo from './logo.svg';
// import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Allpages from './Pages/Allpages';
import { BrowserRouter  ,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import About from './Pages/About';
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/react-fontawesome'
import Peri from './Pages/Sidebar/Peri';
// import Drinks from './Pages/Sidebar/Drinks';
// import Snackers from './Pages/Sidebar/Burgers';
import Bucket from './Pages/Sidebar/Bucket';
import Rolls from './Pages/Sidebar/Rolls';
import Footer from './Pages/Footer';
// pages
import Bucketpage from './Pages/Sidebar/Pages1/Bucketpage';
import Rollspage from './Pages/Sidebar/Pages1/Rollspage';
import Peripage from './Pages/Sidebar/Pages1/Peripage';
import Burgerspage from './Pages/Sidebar/Pages1/Burgerspage';
import Burgers from './Pages/Sidebar/Burgers';







function App() {
  return (
    
    <div className="App">
  
      <BrowserRouter>
      <Allpages/>
      <Routes>
        <Route path='/' element={<Home/>}/>

           <Route path="/peri" element={<Peri/>}/>
          <Route path="/burgers" element={<Burgers/>}/>
          <Route path='/rolls' element={<Rolls/>}/>
          <Route path='/bucket' element={<Bucket/>}/>
          {/* <Route path='/drinks' element={<Drinks/>}/>  */}

          {/* pages */}
        {/* </Route> */}
          <Route path='/bucketpage' element={<Bucketpage/>}/>
          <Route path='/rollspage' element={<Rollspage/>}/>
          <Route path='/peripage' element={<Peripage/>}/>
          <Route path='/burgerspage' element={<Burgerspage/>}/>


          
        

        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact Us' element={<Contact/>}>


     
      </Route>
      </Routes>
      
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
