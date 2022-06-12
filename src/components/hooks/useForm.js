import {useState} from 'react'

const useForm = (initialState)=>{
    const [formUse,setFormUse]= useState(initialState)

    const handleInputChange=(event)=>{
        const {value, name} = event.target
        setFormUse({...formUse,[name]:value})
    }
    const clear=()=>{
        setFormUse(initialState)
    }
    return [formUse, handleInputChange, clear]
}
export default useForm