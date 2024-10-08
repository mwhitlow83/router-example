//matthew whitlow
//assignment 3



import './css/main.css';
import React from 'react';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import { motion } from "framer-motion"

function Appw() {
  return (
    <div className='App'>
      <motion.h1 
      
      initial={{Y: -200}}
      animate={{Y: 0}}
      transition={{type: "spring", duration: 0.5}}
      whileHover={{scale: 1.1 }}>To-Do App</motion.h1>

        <motion.div 
       initial={{Y: 1000}}
       animate={{Y: 0}}
       transition={{type: "spring", duration: 1}} >
          <Todos/>
          <DisplayTodos/>
        </motion.div>
      
    </div>
  );
}

export default Appw;