import React from "react";
import './input.style.css';

const Input = (props) => {
    return (
      <div className="input">
        <div className="input-box">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button>🖼️ Generate Meme</button>
      </div>
    );
};


export default Input;