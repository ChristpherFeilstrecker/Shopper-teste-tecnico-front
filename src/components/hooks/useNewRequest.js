import  {useEffect} from "react";
import axios from "axios";


const useNewRequest = (request) =>{
    console.log("entrou 1")
    
    axios
    .post(`https://shopper-api-challenge.herokuapp.com/shopper_challenge/newrequest`,request)
    .then((response)=>{
        console.log("entrou 2")
       console.log(response.data) 
    })
    .catch((error)=>{
        console.log("erro",error)
    });
}
export default useNewRequest