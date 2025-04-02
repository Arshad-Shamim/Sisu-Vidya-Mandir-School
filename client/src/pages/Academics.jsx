import React,{useState,useEffect}from 'react'

import {nav,footer} from './Home.jsx'
import '../cascading/academics.css'
import digitalClass from '../assets/digitalClasses.jpg'
import selfDefence from '../assets/selfDefence.jpg'
import leadership from '../assets/leadership.jpg'

export default function Academics() {

    const msg = ["Quality Learning","Holistic Development","Future-Ready Education"]
    const programs = [
        {
          title: "Digital Learning & Coding Classes",
          image: digitalClass, 
          points: [
            "Students learn C Programming, HTML, CSS, JavaScript & Cybersecurity.",
            "Hands-on projects to create basic websites, apps & coding games.",
            "Preparing students for technology-driven careers."
          ]
        },
        {
          title: "Self-Defense & Physical Training",
          image: selfDefence, 
          points: [
            "Karate & Self-Defense Training – To build confidence & fitness.",
            "Scout & Guide Adventure Training – Leadership, teamwork & survival skills.",
            "Yoga & Meditation Classes – For mental well-being & discipline."
          ]
        },
        {
          title: "Leadership & Personality Development",
          image: leadership,
          points: [
            "Public Speaking & Communication Workshops.",
            "Student Council & Leadership Programs.",
            "Career Guidance & Skill-Based Learning."
          ]
        }
      ];
      

    const [index,setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % msg.length);
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
    }, []);  

  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div className='conatiner d-flex' id="academics-sec-2">
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
            <h2 className="text-center mb-4 heading heading-color">Our Learning Approach</h2>
                <div className="list-group">
                    <div className="list-group-item d-flex align-items-center">
                    ✅ <span className="ms-2">Interactive & Practical-Based Learning – Hands-on projects, group discussions & real-world problem-solving.</span>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                    ✅ <span className="ms-2">Technology-Integrated Education – Digital learning tools, smart classes & computer training.</span>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                    ✅ <span className="ms-2">Strong Foundation in Core Subjects – Special focus on Science, Mathematics, Social Studies, and Languages.</span>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                    ✅ <span className="ms-2">Competitive Exam Preparation – Olympiads, NTSE, and other scholarship programs.</span>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                    ✅ <span className="ms-2">Value-Based Education – Teaching ethics, discipline, and moral responsibility.</span>
                    </div>
                </div>
            </div>
        </section>

    <section>
        <div className="container my-5">
        <h2 className="text-center mb-4 heading heading-color">Curriculum & Subjects Offered</h2>
        <p className="text-center" style={{color:"rgba(20, 20, 244, 0.77)"}}>We provide comprehensive academic programs from pre-primary to senior secondary levels with a focus on:</p>
            <div className="list-group">
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Languages: English, Odia, Hindi, Sanskrit</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Mathematics & Logical Reasoning</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Science (Physics, Chemistry, Biology, Environmental Science)</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Social Science (History, Geography, Political Science, Economics)</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Computer Science & Digital Learning</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Physical Education & Health Science</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                🔹 <span className="ms-2">Arts, Music & Performing Arts</span>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container py-5">
        <h2 className="text-center mb-4 heading heading-color">Special Programs for Skill Development</h2>
        <div className="row">
            {programs.map((program, index) => (
            <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-lg border-0">
                <img src={program.image} alt={program.title} className="card-img-top img-fluid"  style={{width:"100%",height:"35vh"}}/>
                <div className="card-body text-center">
                    <h3 className="card-title">{program.title}</h3>
                    <ul className="list-unstyled mt-3">
                    {program.points.map((point, idx) => (
                        <li key={idx} className="text-muted">💡 {point}</li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>

    <section className="container my-5">
      <h2 className="text-center mb-4 heading heading-color">Assessment & Evaluation</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">✔ Continuous Learning Assessment (CLA)</h5>
              <p className="card-text">Regular tests & assignments to track progress.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">✔ Semester-Based Examination System</h5>
              <p className="card-text">Transparent & structured evaluation for fair grading.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">✔ Parent-Teacher Meetings (PTMs)</h5>
              <p className="card-text">Regular updates on student progress through meetings.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">✔ Online Result Portal</h5>
              <p className="card-text">Parents can access report cards anytime with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
        {footer()}
    </section>
    </>
  )
}
