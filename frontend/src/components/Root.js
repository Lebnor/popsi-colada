import React, { useEffect } from 'react' 
import App from './App' 

import { browserHistory } from 'react-router';
import { useHistory } from 'react-router-dom'

const Root = () => { 
   const history = useHistory() 

   browserHistory.listen( location =>  {
        alert(location);
   });


   useEffect(() => {
      return history.listen((location) => { 
         alert(`You changed the page to: ${location.pathname}`) 
      }) 
   },[history]) 

   return ( 
      <App /> 
   ) 
}

export default Root