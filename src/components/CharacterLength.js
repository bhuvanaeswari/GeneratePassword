import React from 'react'
import "../App.css"

const CharacterLength = ({length,setLength}) => {
  return (
    <div className="characterLength">
    <span>
      <label>character length</label>
      <label>{length}</label>
    </span>
    <input
      type="range"
      min="4"
      max="20"
      value={length}
      onChange={(e) => setLength(e.target.value)}
    />
  </div>
  )
}

export default CharacterLength