import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "react-bootstrap/Card";
import Buscador from "./Buscador";


//aqui van los datos que quiero de la api

const MiApi = () => {

    const [miPersonaje, setMiPersonaje ] = useState ("Krusty") //esto es lo que muestro
    const [MiApiData, setMiApiData] = useState ([])// esto es lo que obtengo de la api

    const findCharacters = ()=> {
        const MiApiUrl = `https://apisimpsons.fly.dev/api/personajes/find/${miPersonaje}`
        
        axios
        .get (MiApiUrl)
        .then ((response) => {
          const sortedData = response.data.result.sort((a, b) => {
            return a.Nombre.localeCompare(b.Nombre)
          });
            console.log("datos API",sortedData)
            setMiApiData (sortedData)
        })

        .catch ((error) => {
            console.log ("error al obtener data", error)
        })
 }

 useEffect (() => {
    findCharacters ()
 },  [miPersonaje])

 const submitOk = (item) => {
    setMiPersonaje(item)
 }

 return (
  <>

    <div>
      <Buscador onSubmit={submitOk} /> 
    </div>

    <div className="cards">
      {MiApiData.length > 0 ? (
        MiApiData.map((i, index) => (
          <Card border="dark" key={index} style={{ width: "20rem" }} className="p-2">
          <Card.Img variant="top" src={i.Imagen} style={{ width: "200px", maxHeight: "500px", alignSelf:"center" }} />
          <Card.Body>
          <Card.Title className="nombre"><p>Nombre</p> <h4>{i.Nombre}</h4>
          </Card.Title>
          <Card.Text className="historia">{i.Historia}</Card.Text>
          <br />
          <Card.Text className="ocupacion"> <em>{i.Ocupacion}</em></Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>NO EXISTE</h1>
      )}
    </div>
  </>
);
};

export default MiApi;