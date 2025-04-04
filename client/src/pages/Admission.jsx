import React from 'react'


import {nav,footer} from './Home.jsx';
import '../cascading/admission.css'
import whyus from '../assets/whyus.png'

export default function Admission() {

  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div className='conatiner d-flex' id="admission-sec-2">
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

        <section className='my-5 container'>
                <div className='conatiner overview-lg my-2'>
                    <div className='row col-12 mt-3'>
                        <div className='col-md-5 d-flex'>
                            <img src={whyus} alt="" className='img-fluid col-md-9  col-8 mx-auto my-auto'/>
                        </div>
                        <div className='col-md-7'>
                            <ul className='text-start'>
                                <li><span className='fw-bold'>Well-Structured Curriculum:</span> Balanced focus on academics, skill-building & moral education.</li>
                                <li><span className='fw-bold'>Affordable Fees:</span> High-quality education at an accessible cost.</li>
                                <li><span className='fw-bold'>Safe & Supportive Environment:</span> Secure campus with trained faculty & student support services.</li>
                                <li><span className='fw-bold'>Skill-Based Learning:</span> Self-defense, digital education & leadership training.</li>
                                <li><span className='fw-bold'>Focus on Indian Values:</span> Strong emphasis on culture, tradition & discipline.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>


        <section className="container my-5 px-3" style={{ maxWidth: "100%" }}>
            <div className="row justify-content-center">
                <div className="col-md-10 col-12 text-center">
                <h2 className="mb-4 heading heading-color">Admission Process</h2>
                <p className='sub-heading-color'>We welcome students from Pre-Primary to Senior Secondary levels. Follow these steps to enroll:</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-11 col-12">
                <ul className="list-group list-group-flush shadow p-4 rounded  list-unstyled">
                    <li className="list-group-item border-0">
                    <strong>Step 1: Fill Out the Application Form</strong>
                    <p>📥 Download Admission Form (PDF) or collect it from the school office.</p>
                    </li>
                    <li className="list-group-item border-0">
                    <strong>Step 2: Submit Documents</strong>
                    <ul className='list-unstyled ps-2'>
                        <li>✅ Birth Certificate</li>
                        <li>✅ Previous School’s Report Card (for Grade 1 & above)</li>
                        <li>✅ Aadhar Card of Student & Parents</li>
                        <li>✅ 2 Passport-Sized Photos</li>
                    </ul>
                    </li>
                    <li className="list-group-item border-0">
                    <strong>Step 3: Entrance Test & Interview</strong>
                    <ul className=' list-unstyled ps-2'>
                        <li>✔ Required for students seeking admission in Grade 6 and above.</li>
                        <li>✔ For lower grades, admission is based on age eligibility & seat availability.</li>
                    </ul>
                    </li>
                    <li className="list-group-item border-0">
                    <strong>Step 4: Fee Payment & Confirmation</strong>
                    <ul className=' list-unstyled ps-2'>
                        <li>💰 Pay the admission & tuition fees as per the fee structure.</li>
                        <li>📝 Collect the Admission Confirmation Letter & Student ID Card.</li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </section>

        <section className="container my-5">
            <h3 className="mb-4 text-center heading heading-color">
            Age Eligibility Criteria
            </h3>
            <div className="card shadow rounded-4 p-4">
                <ul className="list-group list-group-flush">
                <li className="list-group-item">✅ Nursery: <strong>3+ years</strong></li>
                <li className="list-group-item">✅ LKG: <strong>4+ years</strong></li>
                <li className="list-group-item">✅ UKG: <strong>5+ years</strong></li>
                <li className="list-group-item">✅ Class 1 & Above: <strong>As per government age criteria</strong></li>
                </ul>
            </div>
        </section>

        <section className="container my-5">
            <h3 className="mb-4 text-center heading heading-color">Fee Structure</h3>
            <div className="card shadow rounded-4 p-4">

                <p className="mb-3">
                💰 <strong>Affordable Monthly Fee:</strong> ₹<strong>99</strong> per student
                </p>

                <p className="mb-3">
                💳 <strong>Payment Methods:</strong> Online banking, UPI, cash deposit at the school office
                </p>

                <a 
                href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view?usp=drive_link" 
                className="btn btn-primary mt-2 target_blank" 
                target="_blank"
                download
                >
                📥 Download Full Fee Structure (PDF)
                </a>
            </div>
        </section>


        <section className="container my-5">
                <div className='text-center my-2'>
                    <h3 className="mb-4 heading heading-color">Scholarships & Financial Aid</h3>
                    <p>We offer scholarships & concessions for</p>
                </div>
            <div className="card shadow rounded-4 p-4">
                <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">✔ Economically weaker students</li>
                <li className="list-group-item">✔ Meritorious students with outstanding academic performance</li>
                <li className="list-group-item">✔ Students excelling in sports & extracurricular activities</li>
                </ul>

                <p className="mt-3 text-center">
                📩 <strong>Contact the school office for scholarship application details</strong>
                </p>
            </div>
        </section>


        <section>
            {footer()}
        </section>

    </>
  )
}
