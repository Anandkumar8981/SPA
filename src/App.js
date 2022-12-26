import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';

import Data from './data';
const App = () => {
  const [show,setShow]=useState(true);
  const [cart , setCart]=useState([]);
  return (
    <React.Fragment>
      <Navbar />
      <Amazon />
      
    </React.Fragment>
  )
};

export default App;