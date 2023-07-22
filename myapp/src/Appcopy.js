import logo from './logo.svg';
import './App.css';
import Image from './htmlimg.png'

import Cardimport from './Components/Cardimport';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'



import Navbar from './Components/Components.js'
import Bootstrap from './Components/Bootstrap';
import Nav from './Navbar';
// import Firstclass from './Components/First';
import  Style from './Components/Components.module.css'                      
import Classfile from './Components/statemethod';

import Example from './Components/Reactbootstrap';
import Cardimport1 from './Self_practice/Cardimportpractice';
import Tabimport from './Self_practice/Tableimportpractice';
import Uncontrolled from './Components/Uncontrolled';
import Controlled from './Components/Controlled';
import Form1 from './Components/Form';
import Styled1 from './Components/Styledom';
import Lifecycle1 from './Components/Lifecycle1';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter,Routes,Navigate } from 'react-router-dom';

import Home from './Routing/Home';
import About from './Routing/About';
import Contacts from './Routing/Contact';
import Blog from './Routing/Blog';
import Newabout from './Routing/Newabout';

// import Error from './Routing/Error';
import Navlink from './Routing/NavbarRout';




                                                               // main or child class me agar same classname h or css file main me import kra rahe 
                                                        // to file ko rename krke usme .module.css lagate h or usko pi naam dekr import kra lenge
                                                        // or jaha us css ka use krna h waha pr className={naam.className} denge 

// function App() {

//  let change=(a)=>{
//   console.log(a)
//  }



//   return (

//     <div className="App">
      {/* <header className="App-header">
        <img src={logo} className={Style.Logoimg} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
        
        <Example/>




        <div className='Newdiv'>
           <h1>
            Hello World.....!!!!
           </h1>
           
           <img src={logo} className="Logo-app "/>
           <img src={Image} className={Style.Logoimg} />
            
        </div> */}



        {/* <Nav fun={change}/>
                      
        <Bootstrap  fun={change}/> */}
        {/* <Firstclass/> */} 

       {/* <div className="p-5 m-5 border bg-info">
          <Classfile/>
       </div>*/}

{/* 
       <div className="p-5 m-5 border bg-success d-flex overflow-auto">
            <Cardimport/>
       </div> */}

       {/* <div className="p-5 m-5 border bg-success d-flex overflow-auto">
            <Uncontrolled/>
       </div> */}
       
       {/* <div className="p-5 m-5 border bg-secondary d-flex overflow-scroll gap-5">
           <Controlled/>
       </div> */}

       {/* <div className="p-5 m-5 border bg-success">
            <Form1/>
       </div> */}

       {/* <div className="p-5 m-5 border bg-success d-flex">
            <Styled1/>
       </div> */}
       
      {/*  <div className="p-5 m-5 border bg-secondary d-flex overflow-scroll gap-5">
            <Cardimport1/>
       </div> 

       <div className="p-5 m-5 border bg-secondary  overflow-scroll gap-5">
            <Tabimport/>
       </div>  */}

       {/* <div className="p-5 m-5 border bg-secondary  overflow-scroll gap-5">
            <Lifecycle1/>
       </div> */}








{/* //     </div> */}






 
 
 
//  );

// }
// export default App;
    













export default class App extends Component{
     render(){
          return(
               <div>
                    <BrowserRouter>
                   <Navlink/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<Newabout/>}>
                         <Route path='/about' element={<About/>}></Route>

                          <Route path='/about/myblog' element={<Blog/>}></Route>
                          <Route path='/about/myform' element={<Form1/>}></Route>

                        </Route>






                        <Route path='/contact' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                        <Route path='/form' element={<Form1/>}/>
                        
                        
                        
                        {/* <Route path='*' element={<Error/>}/> */}
                        <Route path="*" element={<Navigate to="/"/>}/>
                     </Routes>
                    
                    </BrowserRouter>


                    
                
                   



               </div>
          )
     }
}


