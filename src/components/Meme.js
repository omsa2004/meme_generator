import React from "react";
import memeData from "./memeData.js";
export default function Meme() {
  // let [memeImg, setMemeImg] = React.useState("")
  const [meme, setMeme] = React.useState({
    topText :"",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setallMemeImages] = React.useState(memeData)

  function handleClick() {

    let arr = allMemeImages.data.memes;
    let url = (arr[Math.floor(Math.random() * arr.length)]).url;
    setMeme(prevMem => ({
      ...prevMem,
      randomImage: url
    }))
  }

  return (
    <div className="formsection">
      <div className="form">
        <input type="text" className="fromInput" placeholder="Top Text" />
        <input type="text" className="fromInput" placeholder="Bottom Text" />
        <button onClick={handleClick} className="formButton">
          Get a new meme image 🖼
        </button>
        <img className = "memeimg" src={meme.randomImage} alt="randomImage"></img>
      </div>
    </div>
  );
}
