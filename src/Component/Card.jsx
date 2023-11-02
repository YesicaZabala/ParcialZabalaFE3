import React from 'react'

const Card = ({usuario}) => {
  return (
    <div style={{}}>
        <h3 style={{}}>Hola {usuario.nombre}</h3>
        <h3 style={{}}>Sabemos que tu cantante favorito es {usuario.cantante}</h3>
    </div>
  )
}

export default Card