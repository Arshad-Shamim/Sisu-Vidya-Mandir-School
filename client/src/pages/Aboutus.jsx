import React,{useEffect,useState} from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import {nav} from './Home.jsx'
import '../cascading/aboutus.css'
import ourHistory from '../assets/ourHistory.jpg'

export default function Aboutus() {

    const [index,setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % msg.length);
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
    }, []);  
    
    
    const msg = [" A Tradition of Excellence","A Legacy of Learning"," A Future of Possibilities"]

      const values = [
        { title: "Discipline & Respect", description: "Encouraging students to be responsible and ethical." },
        { title: "Academic Excellence", description: "Providing a strong foundation in science, mathematics, and languages." },
        { title: "Holistic Development", description: "Nurturing physical, mental, and emotional growth." },
        { title: "Innovation & Creativity", description: "Encouraging students to think outside the box." },
        { title: "Community Engagement", description: "Instilling a spirit of service and social responsibility." },
    ];    

  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div className='conatiner d-flex' id="sec-2">
                <div className='mx-auto mt-auto container d-flex h-75'>
                    <div className='my-auto col-md-10 mx-auto'>
                        <h3 className='my-2 text-center dancing-script-text' style={{color:"#dcdf28ee"}}>{msg[index]}</h3>
                        <p className='container text-center' style={{color:"#f0f2f5d8",fontSize:"18px"}}>
                            At Sisu Vidya Mandir, Hindol, we believe that education is the foundation of a strong and prosperous society. Our school is committed to providing a holistic learning experience that nurtures academic excellence, moral values, and physical well-being in every student.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
          <div className="container my-5">
            <div className="text-center overview-lg p-2">
              <h2 className="fw-bold">🎯 Our Vision</h2>
              <p className="lead">
                To create a learning environment that fosters discipline, creativity,
                leadership, and a deep respect for Indian culture and traditions,
                ensuring that every student becomes a responsible global citizen.
              </p>
            </div>
      
            <div className="mt-4 p-2 overview-lg linearGrade text-white">
              <h2 className="fw-bold text-center">Our Mission</h2>
              <ul className="list-group list-group-flush mt-3" >
                <li className="list-group-item linearGrade text-white">
                  ✅ To provide high-quality education rooted in Indian values and modern learning techniques.
                </li>
                <li className="list-group-item linearGrade text-white">
                  ✅ To develop well-rounded individuals by integrating academics, extracurriculars, and life skills.
                </li>
                <li className="list-group-item linearGrade text-white">
                  ✅ To instill moral and ethical values through discipline, spiritual teachings, and social responsibility.
                </li>
                <li className="list-group-item linearGrade text-white">
                  ✅ To encourage innovation and technology by offering digital education and programming skills.
                </li>
                <li className="list-group-item linearGrade text-white">
                  ✅ To promote leadership and teamwork through Scout & Guide training and outdoor learning programs.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
        <div className="container my-5 row overview-lg mx-auto">
            <div className='mb-2'>
              <h1 className='heading-color text-center'>Our History</h1>
            </div>
            <div className='col-md-6'>
              <p className='mx-auto text-center'>Sisu Vidya Mandir, Hindol, has been a pillar of academic and cultural excellence in Dhenkanal for many years. Founded with the vision of creating a generation of intellectually and morally strong students, the school has grown into a leading educational institution, offering modern facilities, a well-structured curriculum, and a strong emphasis on traditional Indian education.</p>
            </div>

            <div className='col-md-6'>
              <div className='text-center'>
                <img src={ourHistory} alt="" className="rounded" style={{width:"96%",height:"40vh"}} />
              </div>
            </div>
          </div>
        </section>


        <section>
          <Container className="my-5">
            <h2 className="text-center mb-4 heading-color">Our Core Values</h2>
            <Row className="g-4">
              {values.map((value, index) => (
                <Col md={6} lg={4} key={index}>
                  <Card className="shadow-sm h-100" style={{borderBottom:"2px solid rgba(56, 56, 247, 0.39)"}}>
                    <Card.Body className="text-center">
                      <FaCheckCircle className="text-success fs-3 mb-2" />
                      <Card.Title style={{color:"rgb(57, 57, 243)"}}>{value.title}</Card.Title>
                      <Card.Text >{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
    </>
  )
}
