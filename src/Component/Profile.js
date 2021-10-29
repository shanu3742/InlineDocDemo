import React ,{memo} from 'react';
import {Card,Button } from 'react-bootstrap';
import useAsync from '../Misc/useAsync';
import imageNotFound from './img/download.png'
import AlbumComponent from './AlbumComponent ';
import PhotoComponent from './PhotoComponent';


/**
 * Displays user profile
 * @param {*} result accepts the success API data.
 * @returns list of the user's profile
 */


const Profile = ({result,setClicked,clicked}) =>{
  const [userid,setUserId] =React.useState(null)
  const [albumid,setAlbumId] =React.useState(null)
 
  const getclicked = (el) => {
    setUserId(el.id)
    setClicked(true)
  }
  

  /**
   * @var {*} albumResult will store the user's alumbs
   * @var {*} photoResult will store the specific alumbs photos.
   */
  const [albumResult]= useAsync([`https://jsonplaceholder.typicode.com/users/${userid}/albums`])
  const [photoResult]= useAsync([`https://jsonplaceholder.typicode.com/albums/${albumid}/photos`])

 
  return (
   <>
   {albumResult.length===0?<>
    {result.map((el) => {
     return(
      <Card key={el.id} style={{marginTop:'2rem'}} >
      <Card.Img variant="top" src={imageNotFound}/>
      <Card.Body>
        <Card.Title ><b style={{fontSize:'1rem'   }}>Name:</b> <span  className='data'>{el.name}</span></Card.Title>
        <Card.Text>
          <b style={{fontSize:'1rem'  }}>Address:</b>
          <span className='data'>
          <span  >{el.address.city} ,</span> 
          <span  >{ el.address.street} ,</span> 
          <span >{ el.address.suite} ,</span>
          <span  >{ el.address.zipcode}</span>
          </span>
        </Card.Text>
        <Button variant="primary" onClick={() =>getclicked(el)}>view profile{el.id}</Button>
      </Card.Body>
    </Card>
     )
   })}
   </>:
     <div>
     {photoResult.length===0?<AlbumComponent setAlbumId={setAlbumId} albumResult={albumResult} setUserId={setUserId} />:<PhotoComponent photoResult={photoResult} setAlbumId={setAlbumId} />}
   </div>
   }
  
 
   </>
  );
}

// Exporting Profile for Parent Component
export default memo(Profile)