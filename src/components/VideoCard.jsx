import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { deleteVideos, saveHistory } from '../service/allApi';





function VideoCard({ displayData, def,insideCategory }) {
  console.log(displayData);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
   const {caption,utubeUrl}=displayData
   
   const localtime=new Date()

   console.log(localtime);
   const formatedate=localtime.toLocaleString();

   console.log(formatedate);
  let HistoryData={caption,utubeUrl,formatedate}
  console.log(HistoryData);
  try{
    await saveHistory(HistoryData)
  }
  catch(err){
    console.log(err);
  }
  
  
  
   
   



    setShow(true)};
  

  const handleRemoveVideo = async (videoid) => {
    //api call
    try {
      const result = await deleteVideos(videoid)
      console.log(result);
      def(result.data)

    }
    catch (err) {
      console.log(err);

    }


  }
  const dragStarted=(e,videoid)=>{
    console.log(videoid);
    e.dataTransfer.setData("videoID",videoid)
    
  }


  return (
    <>
      <Card draggable={true} onDragStart={(e)=>dragStarted(e,displayData.id)} style={{ width: '200px' }}>
        <Card.Img onClick={handleShow} style={{ height: "180px" }} variant="top" src={displayData?.imageUrl} />
        <Card.Body>
          <Card.Title className='d-flex align-item-center justify-content-between'>
            <p>{displayData?.caption}</p>
           {
             !insideCategory &&
             <button className='btn' style={{color:'red'}} onClick={()=>handleRemoveVideo(displayData?.id)}>        <i class="fa-solid fa-trash"></i>
            </button>
           }
          </Card.Title>




        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='d-flex align-items-center justify-content-center'>{displayData?.caption}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="514" src={`${displayData?.utubeUrl}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard