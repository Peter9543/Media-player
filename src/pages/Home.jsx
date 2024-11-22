import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'





function Home() {
  const [addVideosResponse,setaddVideoResponse]=useState("")
  const [videodeleteresponsefromcategory,setvideodeleteresponsefromcategory]=useState("")
  const[videoodedleteresponse,setvideoodedleteresponse]=useState("")
  

  
  
  return (
    <>
    <div className='container d-flex justify-content-between '>
      <Add setaddVideoResonse={setaddVideoResponse}/>
      
      <Link className='text-warning fw-bold fs-5' style={{textDecoration:'none'}} to={'/history'}>Watch History</Link>
  
    </div>
    <div className="row container-fluid my-5">
      <div className="col-lg-6">
        <View  setResponse={addVideosResponse} setvideoodedleteresponse={setvideoodedleteresponse} videodeleteresponsefromcategory={videodeleteresponsefromcategory}/>
        </div>
    <div className="col-lg-6"><Category videoodedleteresponse={videoodedleteresponse} setvideodeleteresponsefromcategory={setvideodeleteresponsefromcategory}/></div>
    </div>
    </>
  )
}

export default Home