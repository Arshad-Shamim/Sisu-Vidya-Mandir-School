import React from 'react'
import {Carousel,Container, Row, Col, Card } from 'react-bootstrap'


import {nav,footer} from '../pages/Home.jsx'
import annualDay from '../assets/annualDay.jpg'
import sportDay from '../assets/sportDay.jpg'
import scoutguide from '../assets/scout&guide.jpg'
import scienceInnovation from '../assets/scienceInnovation.jpeg'
import festival from '../assets/festival.jpg'
import educationalTrips from '../assets/educationTrip.jpeg'
import independenceDay from '../assets/independenceDay.jpg'
import '../cascading/Events.css'


export default function Events() {

        const images = [
        { src: annualDay, alt: "Annual Day"},
        { src: sportDay, alt: "Sports Day & Physical Training" },
        { src: scoutguide, alt: "Scout & Guide Adventure Camps" },
        { src: scienceInnovation, alt: "Science & Innovation Exhibition" },
        { src: independenceDay, alt: "Independence Day & Republic Day Programs" },
        { src: festival, alt: "Festival Celebrations" },
        { src:  educationalTrips, alt: "Educational Field Trips & Excursion" },
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

        <section className='my-5'>
          <div className="container">
            <h3 className="text-center heading py-1 heading-color">Annual & Special Events</h3>
            <div style={{ height:"auto" }}>
              <Carousel>
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block mx-auto border col-12"
                      src={image.src}
                      alt={image.alt}
                      style={{
                        height: "65vh",
                        width:"100%",
                        borderRadius: "30px",
                      }}
                    />
                    <Carousel.Caption>
                        <div>
                            <p className='text-dark fs-5 fw-bold text-white'>{image.alt}</p>
                        </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <h2 className="text-center mb-4 heading heading-color">Monthly Club Activities & Competitions</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body borderBottom">
                  <h5 className="card-title">✔ Debate & Public Speaking Contests </h5>
                  <p className="card-text">Boosting confidence & communication skills.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body borderBottom">
                  <h5 className="card-title">✔ Art, Music & Dance Competitions</h5>
                  <p className="card-text"> Encouraging creativity & talent.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body borderBottom">
                  <h5 className="card-title">✔ Mathematics & Science Olympiads</h5>
                  <p className="card-text">Preparing students for academic excellence.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body borderBottom">
                  <h5 className="card-title">✔ Coding & Robotics Classes</h5>
                  <p className="card-text">Special training in C, HTML, JavaScript & AI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <div className="text-center mb-4">
            <h2 className="heading heading-color">
              Leadership & Personality Development
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">
                  🌟 <spam style={{fontWeight:"600"}}>Student Council Elections</spam> – Encouraging leadership & decision-making.
                </li>
                <li className="list-group-item">
                  🎤 <spam style={{fontWeight:"600"}}>Workshops on Communication & Career Guidance</spam>.
                </li>
                <li className="list-group-item">
                  💡 <spam style={{fontWeight:"600"}}>Entrepreneurship & Business Basics</spam> for senior students.
                </li>
              </ul>
            </div>
          </div>
        </section>

          {footer()}
    </>
  )
}
