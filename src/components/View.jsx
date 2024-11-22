import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideo, getAllVideos, getSingleCategory, update } from '../service/allApi'
import { json } from 'react-router-dom'







function View({ setResponse ,setvideoodedleteresponse,videodeleteresponsefromcategory}) {
  const [allvideos, setAllVideos] = useState([])
  const [deletevideoResponse,setDeletevideo]=useState("")
  
  
  useEffect(() => {
    getAllVideo()
  }, [setResponse,deletevideoResponse,videodeleteresponsefromcategory])
  console.log(allvideos);

  const getAllVideo = async () => {
    try {
      const result = await getAllVideos()
      // console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data)
      }

    }
    catch (err) {
      console.log(err);

    }
  }
  const onDragView=(e)=>{
       e.preventDefault()
  }
     const handleCategory=async(e)=>{
      const {videoDetails,categoryID}=JSON.parse(e.dataTransfer.getData("sharedata"))
      console.log(videoDetails,categoryID);
      try{
        const {data}=await getSingleCategory(categoryID)
        console.log(data);

        const selectedCategoryVideoList=data.allvideos.filter(video=>video.id!=videoDetails.id)
        console.log(selectedCategoryVideoList);
        
        const {id,categoryName}=data

        const categoryResult=await update(categoryID,{id,categoryName,allvideos:selectedCategoryVideoList})
        setvideoodedleteresponse(categoryResult.data)
        await addVideo(videoDetails)
        getAllVideo()
        
      }
      catch(err){
        console.log(err);
        
      }
     }
   

  return (
    <>
      <Row droppable={true} onDragOver={(e)=>onDragView(e)} onDrop={(e)=>handleCategory(e)} className='border border-3'>

        {

          allvideos.length > 0 ?
            allvideos?.map(video => (
              <Col key={video?.id} lg={4} mb={6} sm={12}>

                <VideoCard displayData={video} def={setDeletevideo} />
              </Col>
            ))
             :
            <div className='text-danger fs-3 fw-bold'>Nothing to display</div>

        }


      </Row>
    </>
  )
}

export default View