import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import NameComponent from './components/ls';
import { useRef, useState } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {

  let [name, setName] = useState("Ned stark");

  let nameRef = useRef();

  const submitButton = () => {
    setName(nameRef.current.value);
  };


  return (
    <div className="App">
      
      {/* <Home name='Adedamola' bio='Student at Gomycode' profession='Developer'/>
      <Home name='Folu' bio='Student at Gomycode Festac' profession='Developer'/>
      <Home name='Tolu' bio='Student at Gomycode Lekki' profession='Developer'/>
      <About name='Folu' bio='Student at Gomycode' profession='Developer'/>
      <Contact name='Tolu' bio='Student at Gomycode' profession='Developer'/> */}

      {/* <NameComponent /> */}


 {/* // hooks example 2 */}
        {/* <p>{name}</p>
     <h1>Who is your favorite Games of throne character</h1>

     <div>
       <input
         placehoder="enter your preferred GOT character..."
         ref={nameRef}
         type="text"
       />
       <button type="button" onClick={submitButton}>
         Submit
       </button>
     </div>
    </div> */}



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>

    </div>
 
    
  );
}

export default App;
