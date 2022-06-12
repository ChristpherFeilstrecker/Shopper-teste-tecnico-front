import axios from 'axios';
import { BASE_URL } from '../constants/BaseURL';


export const registDataMessage = (body, clear) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            console.log(res.data)
           // localStorage.setItem('token', res.data.token)
            clear()
        })
        .catch((err) => {
            console.log("erro do cadastro",err.response)
            alert("Erro no cadastro")
        })
}