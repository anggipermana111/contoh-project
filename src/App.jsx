/* eslint-disable no-unused-vars */
import Galaxy from "./components/Galaxy"
import "./App.css"

function App() {

  const galaxies = [
    {
    nama: "Andromeda",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/M31_09-01-2011.jpg/800px-M31_09-01-2011.jpg",
    deskripsi: "Galaksi Andromeda memiliki ukuran yang cukup besar dengan diameter 200.000 tahun cahaya",
    diameter: "220.000 tahun cahaya"
    },
    {
    nama: "Bima Sakti",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ESO-VLT-Laser-phot-33a-07.jpg/320px-ESO-VLT-Laser-phot-33a-07.jpg",
    deskripsi: "Galaksi Bima Sakti ini pertama kali ditemukan pada 18 Juli 1783, oleh seorang astronom Inggris William Herschel",
    diameter: "105.700 tahun cahaya"
    },
    {
    nama: "Ursa mayor",
    gambar: "https://3.bp.blogspot.com/-DCwcxe_kYG0/WuvSeZfU20I/AAAAAAAAaJw/PiZ3epRjtZsrriGq7y1qnVLzEcbxnkzjQCK4BGAYYCw/s1600/M101_3Days_New_APOD1024.jpg",
    deskripsi: "Galaksi Ursa Mayor ini memiliki bentuk elips dan juga rapat jika dibandingkan dengan bentuk atau nama dari galaksi lain",
    diameter: "170.000 tahun cahaya"
    }
   ];

   const a = "Anggi";
   

  return (
    <>
      <h1>NAMA-NAMA GALAXY</h1>
      <hr />
    <div className="container">
      {
        galaxies.map((galaxy,i)=>{
          return <Galaxy key={i} nama={galaxy.nama} gambar={galaxy.gambar} deskripsi={galaxy.deskripsi} diameter={galaxy.diameter} />
        })
      }
    </div>
    </>
  )
}

export default App
