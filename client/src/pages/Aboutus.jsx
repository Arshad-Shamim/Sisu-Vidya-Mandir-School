import React,{useEffect,useState} from 'react'

import {nav} from './Home.jsx'
import whyus from '../assets/whyus.png'
import '../cascading/aboutus.css'

export default function Aboutus() {

    const [index,setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % msg.length);
        }, 2000); // Change word every 2 seconds
    
        return () => clearInterval(interval);
    }, []);  
    
    
    const msg = [" A Tradition of Excellence","A Legacy of Learning"," A Future of Possibilities"]

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
        <h2 className="fw-bold text-center">🌍 Our Mission</h2>
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
    </>
  )
}
