import React from 'react'
import "../App.css"

const Header = ({password,copy,setCopy}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setTimeout(() => {
          setCopy(false);
        }, 1000);
        setCopy(true);
      };
  return (
    <div className="header">
          <div className="title">{password}</div>
          <button className="copybtn" onClick={() => handleCopy()}>
            {copy ? "copied" : "copy"}
          </button>
        </div>
  )
}

export default Header