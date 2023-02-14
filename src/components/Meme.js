import React from "react";

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMemes] = React.useState();

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

  function handleClick() {
    let url = allMeme[Math.floor(Math.random() * allMeme.length)].url;
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
