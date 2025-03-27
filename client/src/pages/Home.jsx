import React, { useState ,useEffect} from 'react'
import {Carousel,Container, Row, Col, Card } from 'react-bootstrap'

import '../cascading/home.css'
import icon from '../assets/logo.png'
import bg_viedo from '../assets/background.mp4'
import selfDefence from '../assets/selfDefence.jpg'
import musicDance from '../assets/musicDance.jpg'
import DigitalClasses from '../assets/digitalClasses.jpg'
import scoutTraning from '../assets/scoutTraning.jpg'
import whyus from '../assets/whyus.png'
import academic from '../assets/academic.png'
import namastai from '../assets/namastai.png'


function nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home"><img src={icon} alt="loading..."  id="logo" className='border-0 rounded-circle'/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto pe-5">
                        <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-dark" href="/aboutus">Aboutus</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function footer(){
    return(
    <footer className="bg-dark text-white py-4">
        <div className="container text-center">
            {/* Logo */}
            <img src={icon} alt="School Logo" className="mb-3" style={{ width: "80px" }} />

            {/* Contact Info */}
            <p>📍 Hindol, Dhenkanal, Odisha, India</p>
            <p>📧gengutiasishimandir@gmail.com | 📞+91 9437349352</p>

            {/* Navigation Links */}
            <nav>
            <a href="/" className="text-white mx-2 text-decoration-none">Home</a>
            <a href="/about" className="text-white mx-2 text-decoration-none">About</a>
            <a href="/courses" className="text-white mx-2 text-decoration-none">Courses</a>
            <a href="/contact" className="text-white mx-2 text-decoration-none">Contact</a>
            </nav>

            {/* Social Media Icons */}
            <div className="mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-twitter"></i>
            </a>
            </div>

            {/* Copyright */}
            <p className="mt-3 mb-0">&copy; 2025 SV Mandir School. All Rights Reserved.</p>
        </div>
    </footer>
    )
}

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

    // const images = [
    //     { src: sportDay, alt: "Sports Day" },
    //     { src: annualFuncation, alt: "Annual Function" },
    //     { src: scienceFair, alt: "Science Fair" },
    //     { src: independenceDay, alt: "Independence Day Celebration" },
    // ];

    const achievementsData = [
        {
          title: "Karate & Self-Defense Training",
          description: "Building confidence & self-discipline.",
          image: selfDefence
        },
        {
          title: "Digital Learning & Coding Classes",
          description: "C, HTML, CSS, JavaScript & AI basics.",
          image: DigitalClasses
        },
        {
          title: "Scout Training",
          description: "Teamwork & adventure programs.",
          image: scoutTraning
        },
        {
            title: "Music, Dance & Arts",
            description: "Encouraging creativity & cultural awareness.",
            image:musicDance
        }
    ];

    const update = [
        "Admissions Open for 2025-26 – Secure your child’s future! Apply Now",
        "Science Olympiad Registration Begins – Encourage your child to participate!",
        "Parent-Teacher Meeting (PTM) Notification – Check the schedule for your child’s class.",
        " Winter Vacation Dates Announced – School will remain closed from 15/12/2025 to 31/12/2025",
        " Scholarship Exam for Meritorious Students – Apply before the deadline!"
    ]
       

  return (
    <>
        {/* section1 */}
        <section>
            {nav()}
        </section>
        
        {/* section2 */}
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
        
        {/* section3 */}
        <section id="school-overview">
            <div class="container">
                <div>
                    <img src={namastai} alt="loading" style={{width:"35vh",height:"17vh"}}/>
                </div>
                <h2 className='heading-color heading'>Welcome to SV Mandir School</h2>
                <p className='heading-color fst-italic'> A Legacy of Excellence in Education</p>
                <div className='conatiner overview-lg my-3'>
                    <h3 className='sub-heading-color'>About Us</h3>
                    <p className='lead'>Established with the vision to nurture responsible, disciplined, and knowledgeable citizens, Sisu Vidya Mandir focuses on academic excellence, personality development, and cultural heritage. With a team of dedicated educators, state-of-the-art facilities, and an engaging curriculum, we prepare students to succeed in all walks of life.</p>
                </div>


                <div className='conatiner overview-lg my-2 lead'>
                    <div className='row col-12 mt-3'>
                        <div className='col-md-5 d-flex'>
                            <img src={whyus} alt="" className='img-fluid col-md-9 mx-auto my-auto'/>
                        </div>
                        <div className='col-md-7'>
                            <ul className='text-start'>
                                <li>Quality Education: CBSE-aligned syllabus with interactive learning.</li>
                                <li>Moral & Ethical Values: Strong emphasis on Indian traditions & discipline.</li>
                                <li>Skill-Based Learning: Digital education, leadership programs & extracurriculars.</li>
                                <li>Self-Defense & Fitness: Karate, Yoga, and Physical Training programs.</li>
                                <li>Technology-Enabled Classrooms: Smart classes & e-learning modules.</li>
                                <li>Scout & Guide Training: Leadership, teamwork & adventure-based learning.</li>
                                <li>Experienced Faculty: Highly qualified teachers dedicated to student success.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='conatiner overview-lg my-2'>
                    <h3 className='sub-heading-color'>Our Academic Approach</h3>
                    <div className='col-12 row'>
                        <div className='col-md-6'>
                            <ul className='text-start lead'>
                                    <li>Innovative Curriculum: Encouraging creative thinking & problem-solving.</li>
                                    <li>Activity-Based Learning: Hands-on projects, science experiments & field trips.</li>
                                    <li>Competitive Exam Preparation: Olympiads, NTSE, and career guidance.</li>
                                    <li>Special Focus on Languages: English, Odia, Hindi, and Sanskrit.</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <img src={academic} alt="loading..." className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* section4 */}
        <section className="container my-4">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                <h4 className="mb-0 text-center">Important Updates</h4>
                </div>
                <div className="card-body">
                <ul className="list-group lead">
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
        
        {/* section5 */}
        <section>
            <Container className="my-5">
                <h2 className="text-center mb-4 heading heading-color">Skill Development Programs</h2>
                <Row className="justify-content-center">
                    {achievementsData.map((achievement, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                        <Card className="shadow-lg lead" style={{borderBottom:"2px solid rgba(56, 56, 247, 0.39)"}}>
                        <Card.Img variant="top" src={achievement.image} alt={achievement.title} style={{height:"35vh"}}/>
                        <Card.Body style={{height:"20vh"}}>
                            <Card.Title style={{fontWeight:600}}>{achievement.title}</Card.Title>
                            <Card.Text className='mt-2'>{achievement.description}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </section>
        
        {/* image Gallery */}
        {/* <section className='my-5'>
            <div className="container">
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
        </section> */}

                {/* section6 */}
        <section>
            {footer()}
        </section>
    </>   
  )
}

export{nav,footer}