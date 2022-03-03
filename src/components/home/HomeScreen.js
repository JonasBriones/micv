import React from 'react'
import { useSelector } from 'react-redux'
import { FooterScreen } from '../footer/FooterScreen'
import { HeaderScreen } from '../header/HeaderScreen'

export const HomeScreen = ( {lang} ) => {

  const { notes } = useSelector( state => state );

  console.log( notes );
  
  return (
    <div className="container-fluid p-0">
        <HeaderScreen />
            <div className="col-lg-8 mx-auto p-8 py-md-5">
                Hola
                <h1>{ notes.active }</h1>
                <h1>{ notes.lang }</h1>
            </div>
        
        <FooterScreen />
    </div>
  )
}
