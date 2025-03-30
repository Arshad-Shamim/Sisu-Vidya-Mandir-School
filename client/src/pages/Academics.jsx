import React,{useState,useEffect}from 'react'

import {nav} from './Home.jsx'
import '../cascading/academics.css'

export default function Academics() {

    const msg = ["Quality Learning","Holistic Development","Future-Ready Education"]
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
    </>
  )
}
