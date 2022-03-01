import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const HeaderScreen = () => {
  return (
    <div className="container-fluid bg-dark">
        <div className="row justify-content-center text-center pt-4">
            <div className="col-auto p-2 mt-4 text-light">
                <img src="/assets/foto.png" alt="Mi Imagen" width="200" />
                <h1>Jonathan Patricio Briones Lavados</h1>
                <small>Software Engineer | Technical Lead | DevOps</small>
            </div>
        </div>
        <hr/>
        <div className="row justify-content-center text-light pb-4 text-head">
            <div className="col-auto"><FontAwesomeIcon icon={ faEnvelope } /> jbrionestecnico@gmail.com</div>
            *
            <div className="col-auto"><FontAwesomeIcon icon={ faLocationDot } /> Cerro del paso | San Bernardo | Chile</div>
            *
            <div className="col-auto"><FontAwesomeIcon icon={ faPhone } /> +56 9 62 948 639</div>
        </div>
    </div>
  )
}
