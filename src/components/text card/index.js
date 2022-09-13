import "./textCard.css";
import React, { useEffect, useState } from "react";

const TextCard = (props) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    console.log(props.text.length)
    if (props.text.length !== 1) {
      console.log(props.text.length)
      setShow("none")
    } else if (props.text === undefined) {
      setShow("none")
    } else {
      setShow("")
    };
  }, [props.text])
  

  const style = {
    display: show,
    gridColumn: props.row
  }

  return (
        <div  style={style} className="textCard__container">
          <p className="textCard__tittle"> {props.title} </p>
          {props.text.map(word => {
            return <p className="textCard__text"> {` ${word} `} </ p>
          })}
        </div>  
  )

}

export default TextCard
  