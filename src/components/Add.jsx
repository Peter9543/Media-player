import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allApi';


function Add({setaddVideoResonse}) {

  const [videoDetails, setvideoDetails] = useState({ caption: "", imageUrl: "", utubeUrl: "" })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isInvalidUrl, setInvalidUrl] = useState(false)
  console.log(videoDetails);
  const getEmbededUrl = (link) => {
    if (link.includes('v=')) {

      let videoId = link.split('v=')[1].slice(0, 11)
      console.log(videoId);
      setvideoDetails({ ...videoDetails, utubeUrl:`https://www.youtube.com/embed/${videoId}` })


    }
    else {
      setvideoDetails({ ...videoDetails, utubeUrl: "" })
      setInvalidUrl(true)
    }

  }
  const handleUpload = async () => {
    const { caption, imageUrl, utubeUrl } = videoDetails

    if (caption && imageUrl && utubeUrl) {

      

      //api call
      try {
        const result = await addVideo(videoDetails)
        console.log(result);
        setaddVideoResonse(result.data)
        
        handleClose()
      
       
      }
      catch (err) {
        console.log(err);
        

      }

    }
    else {
      toast.error("enter the field completely")
    }

  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h4>upload new video</h4>
        
        <button onClick={handleShow} className='ms-3 btn btn-warning p-3 fs-5 fw-bold rounded-circle'>+</button>
      </div>
  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill following details</p>
           {/*video caption*/}
          <FloatingLabel
            controlId="floatingInputcaption"
            label="caption"
            className="mb-3"
          >
            <Form.Control onChange={e => setvideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="caption" />
          </FloatingLabel>
          {/*image url*/}
          <FloatingLabel
            controlId="floatingInputcaption"
            label="imageurl"
            className="mb-3"
          >
            <Form.Control onChange={e => setvideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="image url" />
          </FloatingLabel>
           {/*youtube url*/}
          <FloatingLabel
            controlId="floatingInputcaption"
            label="utubeUrl"
            className="mb-3"
          >
            <Form.Control onChange={e => getEmbededUrl(e.target.value)} type="text" placeholder="utubeUrl" />
            {isInvalidUrl &&
              <p className='text-danger'>invalid video url</p>}
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}




export default Add