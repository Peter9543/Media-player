import CommonAPI from "./CommonApi"
import SERVER_URL from "./SERVER_URL"

//save video
//save video api called by add.jsx

export const addVideo=async(video)=>{
    return await CommonAPI("POST",`${SERVER_URL}/allvideos`,video)
 }
 
 //api call for get 
 export const getAllVideos=async()=>{
   return await CommonAPI("GET",`${SERVER_URL}/allvideos`,"")
 }

 //video delete
 export const deleteVideos=async(videoid)=>{
  return await CommonAPI("DELETE",`${SERVER_URL}/allvideos/${videoid}`,{})
}
//save history api call
export const saveHistory=async(video)=>{
  return await CommonAPI("POST",`${SERVER_URL}/History`,video)
}

//api call for get history
export const getallhistory=async(video)=>{
  return await CommonAPI("GET",`${SERVER_URL}/History`,"")
}

//delete history

  export const deleHistory=async(videoid)=>{
    return await CommonAPI("DELETE",`${SERVER_URL}/History/${videoid}`,{})

  }

// add category  

export const addCategory=async(category)=>{
  return await CommonAPI("POST",`${SERVER_URL}/category`,category)
}

//get category

export const getAllCategory = async () =>{

  return await CommonAPI("GET",`${SERVER_URL}/category`,"")
}


export const deleteCategory = async(videoid) =>{


  return await CommonAPI("DELETE",`${SERVER_URL}/category/${videoid}`,{})
}

//api vall for getting single video

export const getSingleVideo=async(videoid)=>{
  return await CommonAPI("GET",`${SERVER_URL}/allvideos/${videoid}`,"")
}

//api call for update category

 export const update=async(categoryid,category)=>{
return await CommonAPI("PUT",`${SERVER_URL}/category/${categoryid}`,category)
}


// api call for getting single category
 
export const getSingleCategory=async(categoryid)=>{
  return await CommonAPI("GET",`${SERVER_URL}/category/${categoryid}`,"")
}