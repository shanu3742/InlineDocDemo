
import React,{memo} from 'react';
import {Card,Button } from 'react-bootstrap';
import { Icon } from 'rsuite';



/**
 * AlbumComponent to display list of Album.
 *  
 * @param {*} albumResult accepts the array of Album.
 * @param {*} setAlbumId accepts the album id of the users.
 * @param {*} setUserId accepts user id of the users.
 * 
 * @returns List of photos of specific album.
 */


const AlbumComponent = ({setAlbumId,albumResult,setUserId}) => {

    const viewalbum = (el) => {
      setAlbumId(el.id)
    }

    return (
      <>
    
    {albumResult.map((el) => {
      return (
        <Card key={el.id} style={{marginTop:'2rem'}}>
        <Card.Body>
        <Card.Title ><b style={{fontSize:'1rem'   }}>Album Name:</b> <span  className='data'>{el.title}</span></Card.Title>
        
        <Button className={`data${el.id}`} variant="primary" onClick={() => viewalbum(el)} >view picture{el.id}</Button>
      </Card.Body>
        </Card>
      )
    })}
      <Button id='close' className='button1' variant="danger" onClick={() => setUserId(null)}><Icon icon='back-arrow' /></Button>
    </>

    )
  }

export default memo(AlbumComponent) 