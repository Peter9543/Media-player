import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleHistory, getallhistory } from '../service/allApi'




function History() {
  const[videoHistory,setvideoHistory]=useState([])
  console.log(videoHistory);
  
  useEffect(() => {
    gethistory()
  },[])
  const gethistory = async () => {
    try {
      const result = await getallhistory()
      setvideoHistory(result.data)
      console.log(result)

    }
    catch (err) {
      console.log(err);

    }

   
  }

  const deleteHistory=async(videoid)=>{
    try{
     deleHistory(videoid)
     gethistory()
    }
    catch (err){
      console.log(err);
      
    }
  }
  return (
  <>
  <div className='row'><div className="col-lg-10"><h5 className='text-warning ms-5'>Watch History</h5></div>
    <div className="col"><Link to={'/Home'} style={{textDecoration:'none'}}><h5 className='text-warning'>Home<i class="fa-solid fa-house"></i></h5></Link></div></div>
     
    <table className='table'>
      <thead>
        <tr>
        <th>#</th>
        <th>caption</th>
        <th>url</th>
        <th>date and time</th>
        <th><i class="fa-solid fa-ellipsis-vertical"></i></th></tr>
      </thead>
      <tbody>
      
      {
        videoHistory.length>0?

        videoHistory?.map((item,index)=>(
          <tr key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item.utubeUrl} target='_blank'>{item.utubeUrl}</a></td>
            <td>{item.formatedate}</td>
            <button onClick={()=>deleteHistory(item.id)}><i class="fa-solid fa-trash"></i></button> 
          </tr>
          
        ))
        :
        <div>Nothing to display</div>
      }
      </tbody>
    </table>

  </>
  )
}

export default History