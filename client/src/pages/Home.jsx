import React, { useState ,useEffect} from 'react'
import {Carousel,Container, Row, Col, Card } from 'react-bootstrap'

import '../cascading/home.css'
import icon from '../assets/icon.jpg'
import bg_viedo from '../assets/background.mp4'
import sportDay from '../assets/sportDay.jpg'
import annualFuncation from '../assets/annualFuncation.jpg'
import scienceFair from '../assets/scienceFair.jpeg'
import independenceDay from '../assets/independenceDay.jpg'
import hunPer from '../assets/100per.jpg'
import alumni from '../assets/alumni.webp'
import competitions from '../assets/competitions.jpg'

export default function Home() {

    const words = ["Success!","Dreams!","Creativity!","Discipline!","Innovation!"]
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
      }, []);    


    const notices = [
        { title: "Admissions Open for 2025-26", link: "https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view?usp=drive_link" },
        { title: "Upcoming Annual Function", link: "https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view?usp=drive_link" },
        { title: "New Digital Learning Portal Launched ", link: "https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view?usp=drive_link" },
        { title: "Syllabus 2025", link: "https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view?usp=drive_link" },
    ];

    const images = [
        { src: sportDay, alt: "Sports Day" },
        { src: annualFuncation, alt: "Annual Function" },
        { src: scienceFair, alt: "Science Fair" },
        { src: independenceDay, alt: "Independence Day Celebration" },
    ];

    const achievementsData = [
        {
          title: "Board Results",
          year: "2024",
          description: "100% pass results in board exams consistently",
          image: hunPer
        },
        {
          title: "Olympiads & Competitions",
          year: "2024",
          description: "Students ranked among top positions in district-level Olympiads & competitions.",
          image: competitions
        },
        {
          title: "Alumni Excelling",
          year: "2024",
          description: "Successful alumni excelling in various professional fields.",
          image: alumni
        }
    ];

    const update = [
        "Admissions Open for 2025-26 – Secure your child’s future! Apply Now",
        "Science Olympiad Registration Begins – Encourage your child to participate!",
        "Parent-Teacher Meeting (PTM) Notification – Check the schedule for your child’s class.",
        " Winter Vacation Dates Announced – School will remain closed from [Start Date] to [End Date].",
        " Scholarship Exam for Meritorious Students – Apply before the deadline!"
    ]
      
      

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
                <h1 className="display-4 fw-bold">Sisu Viday Mandir School</h1>
                <p className="fs-5"> Hindol, Dhenkanal</p>
                <p className="fs-4 fst-italic" id="quote">"Shaping Future Leaders Through Quality Education"</p>

            </div>
                <div id="meet" className='position-absolute pb-4'>
                    <h1 className='mx-auto text-center'>Where Education Meet <span className='text-warning dancing-script-text'>&quot;{words[index]}&quot;</span></h1>
                </div>
        </section>

        <section id="school-overview">
            <div class="container">
                <h2 className='heading-color heading'>Welcome to SV Mandir School</h2>

                <div className='conatiner overview-lg my-3'>
                    <h3 className='sub-heading-color'>About Us</h3>
                    <p>Established with the vision to nurture responsible, disciplined, and knowledgeable citizens, Sisu Vidya Mandir focuses on academic excellence, personality development, and cultural heritage. With a team of dedicated educators, state-of-the-art facilities, and an engaging curriculum, we prepare students to succeed in all walks of life.</p>
                </div>

                <div className='conatiner overview-lg my-2'>
                    <h3 className='sub-heading-color'>Our History</h3>
                    <p>Sisu Vidya Mandir, Hindol, has been a pillar of academic and cultural excellence in Dhenkanal for many years. Founded with the vision of creating a generation of intellectually and morally strong students, the school has grown into a leading educational institution, offering modern facilities, a well-structured curriculum, and a strong emphasis on traditional Indian education</p>
                </div>

                <div className='conatiner overview-lg my-2'>
                    <h3 className='sub-heading-color'>Our Mission</h3>
                    <ul className='text-start'>
                            <li>To provide high-quality education rooted in Indian values and modern learning techniques.</li>
                            <li>To develop well-rounded individuals by integrating academics, extracurriculars, and life skill</li>
                            <li>To instill moral and ethical values through discipline, spiritual teachings, and social responsibility.</li>
                            <li>To encourage innovation and technology by offering digital education and programming skills.</li>
                            <li>To promote leadership and teamwork through Scout & Guide training and outdoor learning programs.</li>
                    </ul>
                </div>
                <div class="overview-grid">
                    <div class="overview-item">
                    <h3 className='sub-heading-color'>Our Core Value</h3>
                        <ul className='text-start'>
                            <li>Discipline & Respect</li>
                            <li>Academic Excellence</li>
                            <li>Holistic Development</li>
                            <li>Innovation & Creativity</li>
                            <li>Community Engagement</li>
                        </ul>
                    </div>
                    <div class="overview-item">
                        <h3 className='sub-heading-color'>Facilities</h3>
                        <ul className='text-start'>
                            <li>Science & Computer Labs</li>
                            <li>Sports & Cultural Activities</li>
                            <li>Library & Digital Learning</li>
                            <li>Digital Classrooms</li>
                            <li>Scout & Guide Training</li>
                        </ul>
                    </div>
                    <div class="overview-item">
                        <h3 className='sub-heading-color'>Why Choose Us?</h3>
                        <ul className='text-start ps-4'>
                            <li>Quality Education</li>
                            <li>Moral & Ethical Values</li>
                            <li>Skill-Based Learning</li>
                            <li>Self-Defense & Fitness</li>
                            <li>Experienced Faculty</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        <section className="container my-4">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                <h4 className="mb-0 text-center">Important Updates</h4>
                </div>
                <div className="card-body">
                <ul className="list-group">
                    {update.map((value,index)=>(
                        <l1 key={index} className="list-group-item">
                            {value}
                        </l1>)
                    )}
                    <li className="list-group-item text-primary text-center">
                    <strong>Stay tuned for more updates!</strong>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        
        <section>
            <div className="container mt-4">
                <h3 className="text-center heading py-1 heading-color">School Activities</h3>
                <Carousel>
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
        </section>

        <section>
            <Container className="my-5">
                <h2 className="text-center mb-4 heading heading-color">Our Achievements</h2>
                <Row className="justify-content-center">
                    {achievementsData.map((achievement, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                        <Card className="shadow-lg" style={{borderBottom:"2px solid rgba(56, 56, 247, 0.39)"}}>
                        <Card.Img variant="top" src={achievement.image} alt={achievement.title} style={{height:"35vh"}}/>
                        <Card.Body>
                            <Card.Title style={{fontWeight:600}}>{achievement.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{achievement.year}</Card.Subtitle>
                            <Card.Text style={{height:"15vh",overflowY:"scroll"}}>{achievement.description}</Card.Text>
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
