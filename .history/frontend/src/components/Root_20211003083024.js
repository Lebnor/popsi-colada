import React, { useEffect } from 'react' 
import App from './App' 

import { useHistory } from 'react-router-dom'

export default Root = () => { 
   const history = useHistory() 

   useEffect(() => {
      return history.listen((location) => { 
         console.log(`You changed the page to: ${location.pathname}`) 
      }) 
   },[history]) 

   return ( 
      <App /> 
   ) 
}