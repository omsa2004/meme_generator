import React from "react";

export default function Meme() {
  return (
    <div className="formsection">
      <form className="form">
        <input type="text" className="fromInput" placeholder="Top Text" />
        <input type="text" className="fromInput" placeholder="Bottom Text"/>
        <button className="formButton">Get a new meme image 🖼</button>
      </form>
    </div>
  );
}
