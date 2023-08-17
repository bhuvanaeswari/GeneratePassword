import "./App.css";
import { useState } from "react";
import useGeneratePassword from "./hooks/useGeneratePassword";
import StrengthChecker from "./components/StrengthChecker";
import CharacterLength from "./components/CharacterLength";
import CheckBoxes from "./components/CheckBoxes";
import Header from "./components/Header";

function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include UpperCase Letters", status: false },
    {
      title: "Include LowerCase Letters",
      status: false,
    },
    {
      title: "Include Numbers",
      status: false,
    },
    {
      title: "Include Symbols",
      status: false,
    },
  ]);
  const [copy, setCopy] = useState(false);
  const { password, errorMessage, generatePassword } = useGeneratePassword(length,checkBoxData);
  return (
    <div className="container">
      {password && <Header password={password} copy={copy} setCopy={setCopy}/>}
      <CharacterLength length={length} setLength={setLength}/>
      <CheckBoxes checkBoxData={checkBoxData} setCheckBoxData={setCheckBoxData}/>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {password && <StrengthChecker password={password}/>}
      <button
        className="generatebtn"
        onClick={() => generatePassword(length, checkBoxData)}
      >
        Generate password
      </button>
    </div>
  );
}

export default App;
