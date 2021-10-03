import React, { useEffect } from 'react' 
import App from './App' 

import { useHistory } from 'react-router-dom'

const Root = () => { 
   const history = useHistory() 

   useEffect(() => { 
    return history.listen((location) => { 
       window._mfq.push(['newPageView', location.pathname]); 
    }) 
 }, [history])

   return ( 
      <App /> 
   ) 
}

export default Root