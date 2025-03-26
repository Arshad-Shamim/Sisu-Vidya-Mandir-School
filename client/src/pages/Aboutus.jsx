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
                    <div className='my-auto'>
                        <h3 className='my-3 text-center dancing-script-text' style={{color:"#dcdf28ee"}}>{msg[index]}</h3>
                        <h5 className='container text-center' style={{color:"#f0f2f5d8"}}>
                            At Sisu Vidya Mandir, Hindol, we believe that education is the foundation of a strong and prosperous society. Our school is committed to providing a holistic learning experience that nurtures academic excellence, moral values, and physical well-being in every student.
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
