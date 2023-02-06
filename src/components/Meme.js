import React from "react";
import memeData from "./memeData.js";
export default function Meme() {
  function handleClick() {
    let arr = memeData.data.memes;
    let item = arr[Math.floor(Math.random() * arr.length)];
    console.log(item.url);
  }

  return (
    <div className="formsection">
      <div className="form">
        <input type="text" className="fromInput" placeholder="Top Text" />
        <input type="text" className="fromInput" placeholder="Bottom Text" />
        <button onClick={handleClick} className="formButton">
          Get a new meme image 🖼
        </button>
      </div>
    </div>
  );
}
