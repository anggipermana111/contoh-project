/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./Galaxy.css"

const Galaxy = (props) => {
  const [desk,setDesk] = useState(false);
  const handleClick = () => {
    setDesk(!desk)
  };
  const [suka,setSuka] = useState(false);
  const handleClick2 = () => {
    setSuka(!suka)
    setWarna(!warna)
  };
  const [warna,setWarna] = useState(false);
  return (
    <figure key={props.id}>
        <img src={props.gambar} alt={props.nama} />
        <figcaption>
        <h1>{props.nama}</h1>
        <p>{props.diameter}</p>
        <hr />
        {
          desk?<p>{props.deskripsi}</p>:<p></p>
        }
        </figcaption>
        <button onClick={handleClick} >selengkapnya</button>
        <button onClick={handleClick2} style={{ backgroundColor:warna?"aqua":"pink" }} >
          {
            suka?"batal suka":"suka"
          }
        </button>
    </figure>
  )
}

export default Galaxy