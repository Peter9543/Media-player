import axios from "axios";

const CommonAPI=async(httpmethod,url,reqbody)=>{

    const reqConfig={
        method:httpmethod,
        url,
        data:reqbody
    }
    
      return await axios(reqConfig).then(res=>{
    
        return res
    }).catch(err=>{
        return err
    })
    
    
    
    
    }
    export default CommonAPI