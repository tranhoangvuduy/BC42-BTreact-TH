import React, {useState} from 'react'
import "./SelectsGlass.css";

function SelectsGlass() {
  const [glassUrl, setGlassUrl] = useState("img/v1.png")
  return (
    <div className="container">
     <div className="header">
      <h1 className='header__title'>TRY GLASSES APP ONLINE</h1>
     </div>
     <div className='active'>
     <div className="model">
      <img src="img/model.jpg" alt="" />
     </div>
     <div className="model1">
      <img src={glassUrl} alt="" />
     </div>
     </div>
     
     <div className="glasslist">
      <div onClick={() => setGlassUrl("img/v1.png")}>
        <img src="img/g1.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v2.png")}>
        <img src="../img/g2.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v3.png")}>
        <img src="../img/g3.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v4.png")}>
        <img src="../img/g4.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v5.png")}>
        <img src="../img/g5.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v6.png")}>
        <img src="../img/g6.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v7.png")}>
        <img src="../img/g7.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v8.png")}>
        <img src="../img/g8.jpg" alt="" />
      </div>
      <div onClick={() => setGlassUrl("img/v9.png")}>
        <img src="../img/g9.jpg" alt="" />
      </div>
     </div>
    </div>
  )
}

export default SelectsGlass