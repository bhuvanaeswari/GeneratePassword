import React from 'react'
import "../App.css";

const CheckBoxes = ({checkBoxData,setCheckBoxData}) => {
    const checkboxChange = (i) => {
        const updatedCheckbox = [...checkBoxData];
        updatedCheckbox[i].status = !updatedCheckbox[i].status;
        setCheckBoxData(updatedCheckbox);
      };
  return (
    <div className="checkboxes">
        {checkBoxData.map((item, index) => (
          <div>
            <input
              type="checkBox"
              checked={item.status}
              onChange={() => checkboxChange(index)}
            />
            <label>{item.title}</label>
          </div>
        ))}
      </div>
  )
}

export default CheckBoxes