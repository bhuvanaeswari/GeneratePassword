import { useState } from "react"

const useGeneratePassword=()=>{
    const [password,setPassword] = useState("")
    const [errorMessage,setErrorMessage]= useState("")
    const generatePassword =(length,checkBoxData)=>{
        let charSet=""
        let FinalPassword =""
        const selectedOptions = checkBoxData.filter((item,index)=>item.status)
        console.log(selectedOptions)
        if (selectedOptions.length===0){
            setErrorMessage("select alteast one option")
            setPassword("")
            return;
        }
        selectedOptions.forEach((item,index)=>{
            switch(item.title){
                case "Include UpperCase Letters":
                    charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case "Include LowerCase Letters":
                    charSet+="abcdefghijklmnopqrstuvwxyz"
                    break;
                case "Include Numbers":
                    charSet+="0123456789"        
                    break;
                case "Include Symbols"    :
                    charSet+="!@#$%^&*()><?";
                    break;
                default:
                    break;    
            }
        })
   

    for (let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*charSet.length)
        FinalPassword+=charSet[randomIndex]
    }
    setPassword(FinalPassword);
    setErrorMessage("");
}
   return {password,errorMessage,generatePassword}
}
export default useGeneratePassword