import { useState } from "react";
import ".//App.css";
function App() {

  const numbers= [1,2,3,4,5,6,7,8,9];
  const operation=["+","-","*","/"];
  const [currentOperation, setcurrentOperation] = useState("")

  function clickNumber(val){
      setcurrentOperation[currentOperation+val];


  }



  return (
    <div className="App">
      <div className="calculator">
        <div className="display">ghjkl</div>
        <div className="leftside">
          <div id="clear-btn">Clear</div>
      <div className="numbers">
        {numbers.map((val,key) => {
        return <div id="individualnumber" onClick={clickNumber(val)}>{val}</div>
      })}
      </div>
      </div>
      <div className="rightside">
        {operation.map((val,key) => {
          return <div id="operation">{val}</div>
        })}

      </div>
      </div>
    

     </div>
  );
}

export default App;
