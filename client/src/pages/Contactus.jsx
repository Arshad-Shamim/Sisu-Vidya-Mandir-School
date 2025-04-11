import React from 'react'

import {nav,footer} from './Home.jsx'
import '../cascading/contactus.css'

export default function Contactus() {
  return (
    <>
        <section>
            {nav()}
        </section>

        <section>
            <div className='conatiner d-flex' id="contactus-sec-2">
                <div className='mx-auto mt-auto container d-flex h-75'>
                    <div className='my-auto col-md-10 mx-auto'>
                        <h3 className='my-2 text-center dancing-script-text' style={{color:"#dcdf28ee"}}>Reach Out to Us for Admissions, Inquiries & Collaborations</h3>
                        <p className='container text-center lead' style={{color:"white",fontSize:"18px"}}>
                        We welcome your interest in Sisu Vidya Mandir, Hindol. Whether you're a prospective student, parent, alumni, or community member, we're here to assist you. Please use the following contact information to get in touch with us.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container my-5">
        <h2 className="text-center mb-4">School Contact Information</h2>
        <div className="row g-4">
            {/* Contact Info Card */}
            <div className="col-md-6">
            <div className="card shadow-sm h-100 bg-light">
                <div className="card-body">
                <p className="card-text fw-bold">Sisu Vidya Mandir, Hindol</p>
                <h6 className="mt-3">📍 Address</h6>
                <p>Dhenkanal, Odisha, India</p>
                <h6>📞 Phone</h6>
                <p>+91 9437349352</p>
                <h6>✉️ Email</h6>
                <p>gengutiasishimandir@gmail.com</p>
                <p className="text-muted small">
                    <em>Note: The contact details are sourced from the Vidya Bharati Alumni Portal.</em>
                </p>
                </div>
            </div>
            </div>

            {/* Office Hours Card */}
            <div className="col-md-6">
            <div className="card shadow-sm h-100 bg-light">
                <div className="card-body">
                <h5 className="card-title">Office Hours</h5>
                <p>Monday to Saturday: <strong>8:00 AM to 2:00 PM</strong></p>
                <p>Sunday: <strong>Closed</strong></p>
                </div>
            </div>
            </div>

            {/* Social Media Card */}
            <div className="col-md-12">
            <div className="card shadow-sm bg-light">
                <div className="card-body">
                <h5 className="card-title">Connect with Us</h5>
                <ul className="list-unstyled">
                    <li><strong>Facebook:</strong> Sisu Vidya Mandir, Hindol Official Page</li>
                    <li><strong>Twitter:</strong> @SisuVidyaHindol</li>
                    <li><strong>Instagram:</strong> @sisuvidyahindol</li>
                </ul>
                </div>
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
