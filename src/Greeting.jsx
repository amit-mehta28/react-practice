import React from "react";
import { useState } from "react";

let curDate = new Date(); //2022,11,25,14
curDate = curDate.getHours();
let greeting = "";
let greetingColor = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning !";
  greetingColor.color = "green";
} else if (curDate >= 12 && curDate < 16) {
  greeting = "Good Afternoon!";
  greetingColor.color = "yellow";
} else if (curDate >= 16 && curDate < 20) {
  greeting = "Good Evening!";
  greetingColor.color = "orange";
} else {
  greeting = "Good Night !";
  greetingColor.color = "black";
}
let name = "Amit Mehta !";

function Greeting() {
  //    let newTime = new Date().toLocaleTimeString();
  const [time, currTime] = useState();

  const timeUpdate = () => {
    let newTime = new Date().toLocaleTimeString();
    currTime(newTime);
  };
  setInterval(timeUpdate, 1000);

  return (
    <>
      <div className="my_info">
        <div>
          <h3>
            {" "}
            Hello Amit, <span style={greetingColor}> {greeting} </span>
          </h3>
          <h1> My name is : {name}</h1>
          <p> I'm Amit Mehta from Abohar ! I want to become a Professional Developer !</p>
        </div>
        <div className="timebutton_sec">
          <h3> Time : {time}</h3>
          {/* <button className="btn" onClick={timeUpdate}>Click for Current Time !</button> */}
        </div>
      </div>
    </>
  );
}

export default Greeting;
