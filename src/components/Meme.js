import React from "react";
import memeData from "./memeData.js";
export default function Meme() {
  // let [memeImg, setMemeImg] = React.useState("")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setallMemeImages] = React.useState(memeData);

  function handleClick() {
    let arr = allMemeImages.data.memes;
    let url = arr[Math.floor(Math.random() * arr.length)].url;
    setMeme((prevMem) => ({
      ...prevMem,
      randomImage: url,
    }));
  }
  function changeHandler(event) {
    const { name, value } = event.target;
    setMeme((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="formsection">
      <div className="form">
        <input
          type="text"
          className="fromInput"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={changeHandler}
        />
        <input
          type="text"
          className="fromInput"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandler}
        />
        <button onClick={handleClick} className="formButton">
          Get a new meme image 🖼
        </button>
        <div className="memesection">
          <img
            className="memeimg"
            src={meme.randomImage}
            alt="randomImage"
          ></img>
          <h2 className="memeTopText">{meme.topText}</h2>
          <h2 className="memeBottomText">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
