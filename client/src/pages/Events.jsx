import React from 'react'
import {Carousel,Container, Row, Col, Card } from 'react-bootstrap'


import {nav} from '../pages/Home.jsx'
import annualDay from '../assets/annualDay.jpg'
import annualFuncation from '../assets/event.jpg'
import scienceFair from '../assets/whyus.png'
import independenceDay from '../assets/whyus.png'
import '../cascading/Events.css'


export default function Events() {

        const images = [
        { src: annualDay, alt: "Annual Day" },
        { src: annualFuncation, alt: "Annual Function" },
        { src: scienceFair, alt: "Science Fair" },
        { src: independenceDay, alt: "Independence Day Celebration" },
    ];
  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div className='conatiner d-flex' id="event-sec-2">
                <div className='mx-auto mt-auto container d-flex h-75'>
                    <div className='my-auto col-md-10 mx-auto'>
                        <h3 className='my-2 text-center dancing-script-text' style={{color:"#dcdf28ee"}}> Celebrating Learning, Culture & Leadership</h3>
                        <p className='container text-center lead' style={{color:"white",fontSize:"18px"}}>
                            At Sisu Vidya Mandir, Hindol, we believe that learning goes beyond textbooks. Our events and extracurricular activities help students develop confidence, teamwork, creativity, and leadership skills. We organize annual celebrations, competitions, outdoor camps, and leadership programs to ensure students enjoy a well-rounded education.
                        </p>
                    </div>
                </div>
            </div>
        </section>

                {/* <section className='my-5'>
            <div className="container">
                <h3 className="text-center heading py-1 heading-color">Annual & Special Events</h3>
                <Carousel style={{height:"80vh"}}>
                    {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block mx-auto border col-12" src={image.src} alt={image.alt} style={{height:"60vh",borderRadius:"30px"}}/>
                        <Carousel.Caption>
                        <h5 className='text-dark fw-bold fs-1 text-white'>{image.alt}</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section> */}
    </>
  )
}
