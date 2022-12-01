import React from "react";
import Greeting from "./Greeting";

import Card from "./Card";
import robo_img from "./image/blog-img1.png";
import hand_img from "./image/blog-img2.png";
import boy_img from "./image/blog-img3.png";

import CountClick from "./CountClick";
import BgChangeBtn from "./BgChangeBtn";

function App() {
  let cardData = [
    {
      imgsrc: robo_img,
      title:"Robot",
      text:"Robot is the advanced version of AI !",
      btn_link:"https://data-flair.training/blogs/ai-robot/#:~:text=What%20is%20AI%20Robot%3F,picking%2C%20moving%2C%20destroying%20it." 
    },
    {
      imgsrc:hand_img,
      title:"Hand",
      text:"Robot Hand is a very Powerfull hand !",
      btn_link:"https://en.wikipedia.org/wiki/Robotic_arm"
    },
    {
      imgsrc:boy_img,
      title:"Robot",
      text:"Robot is the advanced version of AI !",
      btn_link:"https://data-flair.training/blogs/ai-robot/#:~:text=What%20is%20AI%20Robot%3F,picking%2C%20moving%2C%20destroying%20it." 
    }
  ]

  return (
    <>
      <Greeting />
    

      <div className="container">
        <div className="cards">
        {cardData.map((elem)=>{
          return (
            <Card 
            imgsrc= {elem.imgsrc} 
            title={elem.title} 
            text={elem.text} 
            btn_link={elem.btn_link} />
          )
        })}
          

         
        </div>
      </div>

      <CountClick />
      <BgChangeBtn/>


    </>
  );
}
export default App;
