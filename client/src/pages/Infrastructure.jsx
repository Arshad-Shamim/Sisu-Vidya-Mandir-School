import React from 'react'

import {nav,footer} from './Home.jsx';
import "../cascading/infrastructure.css"

export default function Infrastructure() {
    const facilities = [
        {
          title: "Smart Classrooms",
          points: [
            "📚 Equipped with digital boards & e-learning tools for interactive lessons.",
            "🎥 Video-based learning & real-time visual demonstrations.",
          ],
        },
        {
          title: "Computer & Digital Learning Lab",
          points: [
            "💻 Modern Computer Lab with high-speed internet.",
            "🎓 Training in C Programming, HTML, CSS, JavaScript & more.",
            "🔐 Cybersecurity awareness programs for students.",
          ],
        },
        {
          title: "Science Laboratories",
          points: [
            "🧪 Well-equipped Physics, Chemistry & Biology labs for practical experiments.",
            "📝 Hands-on learning for science projects & competitive exams.",
          ],
        },
        {
          title: "Library & Reading Room",
          points: [
            "📖 A large collection of books, journals & e-books.",
            "📚 Dedicated study space for students to read, research & learn.",
          ],
        },
        {
          title: "Self-Defense & Physical Training",
          points: [
            "🥋 Karate & Self-Defense Training by certified instructors.",
            "🏃‍♂ Scout & Guide Adventure Activities for leadership skills.",
            "🧘‍♀ Yoga & Meditation Sessions for mental well-being.",
          ],
        },
        {
          title: "Sports & Extracurricular Activities",
          points: [
            "🏏 Outdoor Sports – Cricket, Football, Volleyball, Athletics.",
            "♟ Indoor Games – Chess, Carrom, Table Tennis.",
            "🎭 Music, Dance & Arts Classes to encourage creativity.",
          ],
        },
        {
          title: "Transport Facility",
          points: [
            "🚌 Safe & well-managed school transport service covering nearby areas.",
            "📍 Live tracking system for parents to monitor bus routes.",
          ],
        },
        {
          title: "Medical & First Aid Support",
          points: [
            "🏥 School infirmary with basic healthcare services.",
            "👩‍⚕ Regular health check-ups & emergency medical support.",
          ],
        },
    ];

    const points = [
        "✅ 24/7 CCTV Surveillance for campus security.",
        "✅ ID Cards for Students & Staff to ensure safe access.",
        "✅ Strict Visitor Entry Policy for enhanced safety.",
        "✅ Fire Safety & Emergency Response System in place.",
    ];

      
  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div className='conatiner d-flex' id="infrastructure-sec-2">
                <div className='mx-auto mt-auto container d-flex h-75'>
                    <div className='my-auto col-md-10 mx-auto'>
                        <h3 className='my-2 text-center dancing-script-text' style={{color:"#dcdf28ee"}}>Providing Quality Education with Strong Moral Values</h3>
                        <p className='container text-center lead' style={{color:"white",fontSize:"18px"}}>
                        Welcome to Sisu Vidya Mandir, Hindol! We invite students to join our holistic learning environment where academic excellence, character building, and skill development go hand in hand.
                        </p>
                    </div>
                </div>
            </div>
        </section>



        <section className="container py-5">
            <h2 className="text-center mb-5 heading heading-color">Our School Facilities</h2>
            <div className="row">
                {facilities.map((facility, index) => (
                <div className="col-md-6 mb-4" key={index}>
                    <div className="p-4  rounded shadow-sm h-100 bg-light borderBottom">
                    <h5 className="mb-3" style={{fontWeight:"550"}}>{facility.title}</h5>
                    <ul className="list-unstyled mb-0">
                        {facility.points.map((point, idx) => (
                        <li key={idx} className="mb-2">
                            {point}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                ))}
            </div>
        </section>


        <section className="container py-5">
            <h2 className="text-center mb-4 heading heading-color">Security & Safety Measures</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                <div className="p-4 border rounded shadow-sm bg-light">
                    <ul className="list-unstyled mb-0">
                    {points.map((point, index) => (
                        <li key={index} className="mb-3 fs-5">
                        {point}
                        </li>
                    ))}
                    </ul>
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
