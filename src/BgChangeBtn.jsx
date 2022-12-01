import { useState } from "react";

export default function BgChangeBtn(){


    const [bg, setBg] = useState();
    let [name, setName] = useState("Click me ");
   
    const bgChange = ()=>{
    let newBg ="red"
        setBg(newBg);
        let newName="Rapchikkk !"
        setName(newName);
    }
    return(
        <>
        <div className="bgbtn_sec" >
            <button className="btn_bg" style={{backgroundColor:bg}} onClick={bgChange}> {name}</button>
        </div>
        </>
    );
}