import React from 'react'


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
                            <a href="#about" className="nav-link"><span data-hover="About">Resumen</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" className="nav-link"><span data-hover="Projects">Proyectos</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link"><span data-hover="Contact">Tecnologias</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link"><span data-hover="Contact">Contacto</span></a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        
        <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
            <div className="container">
                <div className='row'>
                    <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <small className="small-text">Bienvenido a mi porfolio website!</small>

                            <h1 className="animated animated-text">
                                <span className="mr-4">Hola, soy</span>
                                    <div className="animated-info">
                                        <span className="animated-item">Marvel Sann</span>
                                        <span className="animated-item">Web Designer</span>
                                        <span className="animated-item">UI Specialist</span>
                                    </div>
                            </h1>

                            <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                            
                            <div className="custom-btn-group mt-4">
                                <a href="#" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                                <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="about-image svg">
                            <img src={imagen} className="img-fluid" alt="svg image" />
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
