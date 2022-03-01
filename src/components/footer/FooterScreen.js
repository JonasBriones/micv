import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export const FooterScreen = () => {
  return (
    <footer className="footer mt-auto bg-dark text-light p-4">
        <div className="container">
            <FontAwesomeIcon icon={ faCopyright } /> Jonas - 1977 - 2023
        </div>
    </footer>
  )
}
