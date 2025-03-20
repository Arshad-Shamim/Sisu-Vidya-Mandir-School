import React, { useState ,useEffect} from 'react'

import '../cascading/home.css'
import icon from '../assets/icon.jpg'
import bg_viedo from '../assets/background.mp4'

export default function Home() {

    const words = ["Success!","Dreams!","Creativity!","Discipline!","Innovation!"]
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
      }, []);    

  return (
    <>
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home"><img src={icon} alt="loading..."  id="logo" className='border rounded-circle'/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto pe-5">
                            <li class="nav-item">
                            <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

        <section className="video-section">
            <video autoPlay muted loop className="background-video">
                <source src={bg_viedo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="content text-center col-md-7 col-10">
                <h1 className="display-4 fw-bold">Sishu Viday Mandir School</h1>
                <p className="fs-5"> Hindol, Dhenkanal</p>
                <p className="fs-4 fst-italic" id="quote">"Where learning meets excellence!"</p>

            </div>
                <div id="meet" className='position-absolute bottom-0 pb-4'>
                    <h1 className='mx-auto text-center'>Where Education Meet <span className='text-primary dancing-script-text'>"{words[index]}"</span></h1>
                </div>
        </section>
    </>
    

  )
}
