/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./Galaxy.css"

const Galaxy = (props) => {
  const [desk,setDesk] = useState(false);
  const handleClick = () => {
    setDesk(!desk)
  };
  return (
    <figure key={props.id}>
        <img src={props.gambar} alt={props.nama} />
        <figcaption>
        <h1>{props.nama}</h1>
        <p>{props.diameter}</p>
        </figcaption>
        <button onClick={handleClick} >selengkapnya</button>
        <hr />
        {
          desk?<p>{props.deskripsi}</p>:<p></p>
        }
    </figure>
  )
}

export default Galaxy