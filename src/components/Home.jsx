import React from 'react'
import { Carousel } from 'react-bootstrap'


import imagen from '../assets/imagen.jpg'


export const Home = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                     <i className='uil uil-user'></i> Jonathan Briones Lavados
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-3">
                        <li className="nav-item">
                            <a href="#about" className="nav-link"><span data-hover="Resumen">Resumen</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" className="nav-link"><span data-hover="Proyectos">Proyectos</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#tech" className="nav-link"><span data-hover="Tecnologias">Tecnologias</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link"><span data-hover="Contacto">Contacto</span></a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        
        <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="tech">
            <div className="container h-100">
                <h1 className="text-center">Featured in:</h1>
                <div className='row align-items-center h-100"'>
                    <Carousel>
                        <Carousel.Item>
                        <img
                                        className="d-block"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>

        <section className="contact py-5" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mr-lg-5 col-12">

                    </div>

                    <div className="col-lg-6 col-12">

                    </div>
                </div>
            </div>
        </section>

        <section className="contact py-5" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mr-lg-5 col-12">
                        <div className='google-ap w-100'>
                            <div>
                                <iframe 
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=santiaguo%20centro+(Yo)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="contact-form">
                            <h2 className="mb-4">¿Interesado en trabajar juntos? Hablemos</h2>
                            <form>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact py-5" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mr-lg-5 col-12">
                        <div className='google-ap w-100'>
                            <div>
                                <iframe 
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=santiaguo%20centro+(Yo)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="contact-form">
                            <h2 className="mb-4">¿Interesado en trabajar juntos? Hablemos</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer py-5">
            <div className="container">
                <div className="row">

                        <div className="col-lg-12 col-12">                                
                            <p className="copyright-text text-center">Copyright &copy; 2019 Company Name . All rights reserved</p>
                            <p className="copyright-text text-center">Designed by <a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a></p>
                        </div>
                        
                </div>
            </div>
        </footer>
    </>
  )
}
