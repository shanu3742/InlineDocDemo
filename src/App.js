import React from 'react'
import useAsync from './Misc/useAsync';
import Profile from './Component/Profile';
import { Loader } from 'rsuite';



function App() {
   /**
    * Custom `useAsync` hook  to fetch data from API.
    * @param {Array} stores the data after fetching the API.
    * @param {boolean} changes state depending on the API fetch.
    * @param {boolean} changes state based on API result.
    * 
    * @return(Loader) chnages the state depending upon `isLoading` and `error`. 
    */
  
let [clicked,setClicked]= React.useState(false)
const [result,isloading,error]= useAsync(['https://jsonplaceholder.typicode.com/users'])

return (
  <>{isloading? <Loader center content="loading" />:error?<div>
       <h1>Error Messsage</h1>
        <pre style={{color:'red'}}>Api Bad Request</pre>
      </div>:<Profile result={result} error={error} setClicked={setClicked} clicked={clicked} />}</>
)
}

export default App;
