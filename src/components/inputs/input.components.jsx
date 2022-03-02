import React, { useState, useEffect } from "react";
import './input.style.css';


const Input = (props) => {

  const [meme, setMeme] = useState({
    memeUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((api) => api.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme(prevMeme=> ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  const generateMeme =() => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeUrl: url,
    }));

  };

    return (
      <div className="input">
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form--button" onClick={generateMeme}>
            Get a new meme image 🖼️
          </button>
        </div>
        <div className="meme">
          <img src={meme.memeUrl} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    );
};


export default Input;