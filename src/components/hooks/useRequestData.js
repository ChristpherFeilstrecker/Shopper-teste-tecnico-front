import  {useEffect,useState} from "react";
import axios from "axios";

const useRequestData = (url) =>{
    const [data,setData] = useState();
    useEffect((url)=>{
    axios
    .get(`https://shopper-api-challenge.herokuapp.com/shopper_challenge/products`)
    .then((response)=>{
        
        setData(response.data);
    })
    .catch((error)=>{
    });
},[url]);
return data;
}

export default useRequestData

