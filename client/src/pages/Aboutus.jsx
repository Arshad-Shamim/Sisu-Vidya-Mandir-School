import React,{useEffect,useState} from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import {nav,footer} from './Home.jsx'
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

    const features = [
      {
        icon: "🎓",
        title: "Student-Centered Learning Approach",
        description:
          "We prioritize practical learning, problem-solving, and critical thinking.",
      },
      {
        icon: "💻",
        title: "Modern Digital Learning",
        description:
          "Our classrooms are equipped with smart boards, e-learning tools, and computer labs.",
      },
      {
        icon: "🥋",
        title: "Self-Defense & Leadership Training",
        description:
          "Students undergo karate, self-defense, and personality development programs.",
      },
      {
        icon: "🎭",
        title: "Extracurricular & Talent Development",
        description:
          "Focus on sports, arts, music, dance, and literature.",
      },
      {
        icon: "🏕️",
        title: "Scout & Guide Leadership Programs",
        description:
          "Helping students develop confidence, teamwork, and survival skills.",
      },
      {
        icon: "📖",
        title: "Cultural & Spiritual Education",
        description:
          "Teachings based on Indian traditions, Sanskrit studies, and moral education.",
      },
    ];


    const achievements = [
      {
        icon: "🏆",
        text: "100% pass results in board exams consistently.",
      },
      {
        icon: "🏆",
        text: "Students ranked among top positions in district-level Olympiads & competitions.",
      },
      {
        icon: "🏆",
        text: "Successful alumni excelling in various professional fields.",
      },
      {
        icon: "🏆",
        text: "Recognized for excellence in education & discipline.",
      },
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
                        <p className='container text-center lead' style={{color:"white",fontSize:"18px"}}>
                            At Sisu Vidya Mandir, Hindol, we believe that education is the foundation of a strong and prosperous society. Our school is committed to providing a holistic learning experience that nurtures academic excellence, moral values, and physical well-being in every student.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
          <div className="container my-5">
            <div className="text-center overview-lg p-2">
              <h2 className="heading heading-color">🎯 Our Vision</h2>
              <p className="lead">
                To create a learning environment that fosters discipline, creativity,
                leadership, and a deep respect for Indian culture and traditions,
                ensuring that every student becomes a responsible global citizen.
              </p>
            </div>
      
            <div className="mt-4 p-2 overview-lg">
              <h2 className="text-center heading-color heading">Our Mission</h2>
              <ul className="list-group list-group-flush mt-3 lead" >
                <li className="list-group-item">
                  ✅ To provide high-quality education rooted in Indian values and modern learning techniques.
                </li>
                <li className="list-group-item">
                  ✅ To develop well-rounded individuals by integrating academics, extracurriculars, and life skills.
                </li>
                <li className="list-group-item">
                  ✅ To instill moral and ethical values through discipline, spiritual teachings, and social responsibility.
                </li>
                <li className="list-group-item">
                  ✅ To encourage innovation and technology by offering digital education and programming skills.
                </li>
                <li className="list-group-item">
                  ✅ To promote leadership and teamwork through Scout & Guide training and outdoor learning programs.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
        <div className="container my-5 row overview-lg mx-auto lead">
            <div className='mb-2'>
              <h1 className='heading-color text-center heading'>Our History</h1>
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
          <Container className="my-5 lead">
            <h2 className="text-center mb-4 heading-color heading">Our Core Values</h2>
            <Row className="g-4">
              {values.map((value, index) => (
                <Col md={6} lg={4} key={index}>
                  <Card className="shadow-sm h-100" style={{borderBottom:"2px solid rgba(56, 56, 247, 0.39)"}}>
                    <Card.Body className="text-center">
                      <FaCheckCircle className="text-success fs-3 mb-2" />
                      <Card.Title style={{color:"rgba(243, 57, 116, 0.952)"}}>{value.title}</Card.Title>
                      <Card.Text >{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>


        <section>
          <div className="container my-5 lead">
            <h2 className="text-center mb-4 heading-color heading" >What Makes Us Unique?</h2>
              <div className="row">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-4 ">
                    <div className="card shadow-sm p-3 h-100" style={{borderBottom:"2px solid rgb(57, 57, 243,0.39)"}}>
                      <div className="d-flex align-items-center">
                        <span className="fs-3 me-3">{feature.icon}</span>
                        <h5 className="mb-0 sub-heading-color">{feature.title}</h5>
                      </div>
                      <p className="mt-2 text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>

        <section className='container-fluid my-4'>
          <div className='container'> 
            <h2 className="text-center mt-5 mb-4 heading heading-color">Our Achievements</h2>
            <div className="row justify-content-center lead">
              {achievements.map((achievement, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card shadow-sm p-3 border-0 h-100" style={{ borderBottom: "4px solid rgb(57, 57, 243)" }}>
                    <div className="d-flex align-items-center">
                      <span className="fs-3 me-3">{achievement.icon}</span>
                      <p className="mb-0 text-muted">{achievement.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section>
          {footer()}
        </section>
    </>
  )
}
