import React from 'react'
import { FooterScreen } from '../footer/FooterScreen'
import { HeaderScreen } from '../header/HeaderScreen'

export const HomeScreen = () => {
  return (
    <div className="container-fluid p-0">
        <HeaderScreen />
            <div className="col-lg-8 mx-auto p-8 py-md-5">
                Hola
            </div>
        
        <FooterScreen />
    </div>
  )
}
