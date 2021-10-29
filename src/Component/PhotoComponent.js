import React,{memo} from 'react';
import {Card,Button } from 'react-bootstrap';
import { Icon } from 'rsuite';

/**
 * PhotoComponent to display list of photos.
 *  
 * @param {*} photoResult accepts the array of photos.
 * @param {*} setAlbumId accepts the album id of the photos.
 * 
 * @returns List of photos of specific album.
 */
 const PhotoComponent = ({photoResult,setAlbumId}) => {
    return (
      <>
      <h1>Photo</h1>
    {photoResult.map((el) => {
      return (
        <Card  key={el.id} style={{marginTop:'2rem'}}>
       <img src={el.url} alt={el.id} />
       </Card>
      )
    })}
    <Button id='mySelector' className='button1'  onClick= {() => setAlbumId(null)}><Icon icon='back-arrow' /></Button>
    </>
    )
  }
 export default memo(PhotoComponent)