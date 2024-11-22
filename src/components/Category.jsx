import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, deleteVideos, getAllCategory, getSingleVideo, update } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';







function Category({ videoodedleteresponse ,setvideodeleteresponsefromcategory }) {

  const [show, setShow] = useState(false);


  const [categoryName, setCategoryName] = useState("")
  console.log(categoryName);



  const [allcategory, SetallCategory] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [display, setDisplayCategory] = useState([])
  console.log(allcategory);


  useEffect(() => {
    getCategory()
  }, [videoodedleteresponse])


  const handleAddCategory = async () => {
    if (categoryName) {
      //api call
      try {
        await addCategory({ categoryName, allvideos: [] })
        toast.warning(`successfully added ${categoryName}`)
        getCategory()
        handleClose()
      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("enter the category name")
    }



  }
  const getCategory = async () => {

    try {
      const result = await getAllCategory()
      console.log(result);

      SetallCategory(result.data)
      setDisplayCategory(result.data)
    }
    catch (err) {
      toast.error("failed to fetch")
      console.log(err);

    }
  }
  const handleDeleteCategory = async (categoryID) => {
    try {
      await deleteCategory(categoryID)
      getCategory()


    }
    catch (err) {
      console.log(err);

    }
  }
  const videoDropped = async (e, categoryID) => {
    console.log(`video dropped in category id ${categoryID}`);

    const videoID = e.dataTransfer.getData("videoID")
    console.log(` video id ${videoID}`);
    const { data } = await getSingleVideo(videoID)
    console.log(data);
    const selected = allcategory.find(item => item.id == categoryID)
    selected.allvideos.push(data)
    await update(categoryID, selected)
    getCategory()
    const result = await deleteVideos(videoID)
    setvideodeleteresponsefromcategory(result.data)

  }
  const dragOverStarted = (e) => {
    e.preventDefault()
  }

  const dragStarted = (e, videoDetails, categoryID) => {
    

    const sharedata = { videoDetails, categoryID }
    console.log(sharedata);

    e.dataTransfer.setData("sharedata", JSON.stringify(sharedata))

  }
  return (
    <>
      <div className='d-flex justify-content-around'>
        <h3 className='text-info'>All Category</h3>
        <button onClick={handleShow} className='ms-3 btn btn-warning p-3 fs-5 fw-bold rounded-circle'>+</button>
      </div>
      <div className='container-fluid mt-3 '>
        {allcategory.length > 0 ? (
          allcategory.map(item => (
            < div droppable={true} onDrop={(e) => videoDropped(e, item.id)} key={item.id} onDragOver={(e) => dragOverStarted(e)} className='border border-3 border-light mb-3 d-flex justify-content-between p-3'>
              <div>
                <h5>{item.categoryName}</h5>

                <button onClick={() => handleDeleteCategory(item.id)} className='btn' style={{ fontSize: '20px', color: 'red' }}><i class="fa-solid fa-trash"></i></button>

              </div>

              <div className='row mt-3'>
                {
                  item.allvideos.length > 0 &&

                  item.allvideos.map(video =>
                    <div  droppable={true} draggable={true} onDragStart={(e) => dragStarted(e, video, item.id)} className='col-lg-6'>
                      <VideoCard displayData={video} insideCategory={true} />
                    </div>
                  )
                }
              </div>

            </div>

          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-3 border-info p-3 rounded'>

            <FloatingLabel
              controlId="floatingInputCategory"
              label="category"
              className="mb-3"
            >
              <Form.Control value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} type="text" placeholder="category name" />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
    </>
  )
}

export default Category