import React, { useEffect } from 'react'

const useAsync = ([Api,clicked]) => {
    console.log(clicked)
    

     /**
    
    * `error`: boolean; changes state based on API result.

    */
    const [result,setResult]= React.useState([])
    const [isloading,setIsLoading] = React.useState(false)
    const [error,setError] = React.useState(false)
   
    
    
    
    

    const fetchdata = React.useCallback( async() => {
   
     
     
  
    try{
        setIsLoading(true)
        
      
        const data= await fetch(Api)
        
        if(data.status===404){
            throw new Error('Bad Response from server')
            
        }
            const jdata = await data.json()
            setResult(jdata)
            setError(false)
             setIsLoading(false)
             
            
             
           

    }catch(e){
        setResult([])
        setError(true)
       
        setIsLoading(false)
      
      

        

    }
    
     
  
      

    },[Api])

    useEffect(() => {
        fetchdata()
    },[fetchdata])


return [result,isloading,error]

}

export default useAsync