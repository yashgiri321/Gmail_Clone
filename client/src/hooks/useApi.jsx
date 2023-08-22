import { useState } from "react";
import API from "../services/api.js"


const useApi = (urlObject) => {
    const [response,setResponse] = useState(null);
    const [error,setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const call = async (payload,type = '') =>{
        setResponse(null);
        setError("");
        setIsLoading(true);
        try{
           let res = await API(urlObject, payload, type);
           setResponse(res.data);
        }catch(error){
           setError(error.message);
        } finally{
            setIsLoading(false);
        }
    }
    return {call,response,isLoading,error};
}

export default useApi;