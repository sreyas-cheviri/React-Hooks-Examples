import { useState ,useMemo } from "react";
import ReadMore from "../components/read-more-button";

export default function MemoHook() {
  const [number, setNumber] = useState(0);
  const [theme , setTheme ] = useState(true);
  const doubleNumber = useMemo(() => {return slowFunction(number)}, [number])
  const  themeStyle = useMemo(()=>{return { backgroundColor : theme ? "#283541"  : "white", color : theme? " white" : "#283541"  }},[theme])



  return (
  <div style={{...themeStyle, display:"flex" , alignItems:"center" , gap : "10px" } } className="container">
    <h4>useMemo</h4> 
    <input type="number"  value={number} onChange={e=> setNumber(parseInt(e.target.value))} />
    <button onClick={()=> setTheme(prevthem => ! prevthem) }>toggle theme </button>
    <div >{doubleNumber}</div>
    <ReadMore link={"https://www.youtube.com/watch?v=THL1OPn72vo"}children={`video`}></ReadMore>
  </div>
  )
}

function slowFunction(number: number) {
    for (let i = 0; i < 1000; i++) {
      console.log("called");
      
        // ass
    }
    return number*2;
}