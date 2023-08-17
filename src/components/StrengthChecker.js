import React from 'react'

const StrengthChecker = ({password}) => {
    const getPasswordStrength =()=>{
    const len = password.length
    if (len<1){
        return ""
    }else if (len<4)
    {
        return "very weak"
    }else if (len<8)
    {return "poor"}
    else if (len<10){
        return "medium"
    }else if (len<14)
    {return "strong"}
    else {
        return "very strong"
    }
}
const passstrength = getPasswordStrength()
if (!passstrength) return <React.Fragment/>
  return (
    <div className='strength' style={{color:"white" ,display:"flex",justifyContent:"space-between",paddingBottom:"24px"}}>
        <label>strength : </label>
        <span>{passstrength}</span>

    </div>
  )
};

export default StrengthChecker