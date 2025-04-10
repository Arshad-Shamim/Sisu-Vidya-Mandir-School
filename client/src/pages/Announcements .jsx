import React from 'react'
import {nav,footer} from './Home.jsx'
import temp from '../assets/aboutus.jpg';
import uniform from '../assets/uniform.png'
import logo from '../assets/logo.png';
import parent from '../assets/parent.avif';
import holiday from '../assets/holidayList.jpg';

export default function Announcements () {
  return (
    <>
        <section>
            {nav()}
        </section>


        <section className='container-fluid bg-light container py-4 px-3 my-5 rounded'>
            <div className=''>
              <div>
                <h4 className="heading heading-color text-center">Latest Announcements</h4>
                <ul className="list-group mb-4">
                  <li className="list-group-item">
                    <div className='row col-12'>
                      <div className='col-md-10'>
                      Admissions Open for 2025-26 – Secure your child’s future! <strong>Apply Now</strong>
                      </div>
                      <div className='col-md-2 text-end pe-3'>
                        <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className='row col-12'>
                      <div className='col-md-10'>
                        Science Olympiad Registration Begins – Encourage your child to participate!
                      </div>
                      <div className='col-md-2 text-end pe-3'>
                        <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                      </div>
                    </div>
                  </li>         
                  <li className="list-group-item">
                    <div className='row col-12'>
                      <div className='col-md-10'>
                        Parent-Teacher Meeting (PTM) Notification – Check the schedule for your child’s class.                      </div>
                      <div className='col-md-2 text-end pe-3'>
                        <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className='row col-12'>
                      <div className='col-md-10'>
                        Winter Vacation Dates Announced – School will remain closed from [Start Date] to [End Date].
                      </div>
                      <div className='col-md-2 text-end pe-3'>
                        <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className='row col-12'>
                      <div className='col-md-10'>
                        Scholarship Exam for Meritorious Students – Apply before the deadline!
                      </div>
                      <div className='col-md-2 text-end pe-3'>
                        <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                      </div>
                    </div>
                  </li>         
                </ul>
              </div>

              <div className='my-2'>
                <h4 className="heading heading-color text-center">Exam & Academic Notices</h4>
                  <ul className="list-group mb-4">
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Upcoming Exams: Mid-Term & Annual Exam Schedule.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Download Timetable: Click Here to access the latest exam schedule.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>  
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Result Declaration Dates: Stay updated on report card release dates.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>    
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Syllabus & Study Material: Access syllabus PDFs for all grades.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>                     
                  </ul>
              </div>

              <div className='my-2'>
                <h4 className="heading heading-color text-center">Upcoming School Events & Activities</h4>
                  <ul className="list-group mb-4">
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Annual Day Celebration – Mark your calendar! View Event Details
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Inter-School Sports Meet – Register now for athletics, football, and more.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>  
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Environment Awareness Campaign – Join us for a tree plantation drive.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>    
                    <li className="list-group-item">
                      <div className='row col-12'>
                        <div className='col-md-10'>
                          Book Fair & Literary Fest – Encouraging reading habits in students.
                        </div>
                        <div className='col-md-2 text-end pe-3'>
                          <a href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" target='_blank' className='text-decoration-none' download>Details</a>
                        </div>
                      </div>
                    </li>                     
                  </ul>
              </div>

              <div>
                <h4 className="heading heading-color text-center">Important Circulars & Downloads</h4>
                <div className='row px-3'>
                  <div className='col-md-3 col-9 mx-auto'>
                      <div className='p-2'>
                          <img src={logo} alt="" className='img-fluid rounded-circle border d-block mx-auto border' style={{height:"25vh"}}/>
                        <p className='text-center py-1 fs-6'>School Circuler</p>
                        <div className='col-5 mx-auto'>
                          <a class="btn btn-primary mx-auto" href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" role="button" target='_blank'>Downlade</a>                        
                        </div>
                      </div>
                  </div>
                  <div className='col-md-3 col-9 mx-auto'>
                      <div className='p-2'>
                        <img src={holiday} alt="" className='img-fluid rounded-circle d-block mx-auto border' style={{height:"25vh"}}/>
                        <p className='text-center py-1 fs-6'>Holiday List 2025</p>
                        <div className='col-5 mx-auto'>
                          <a class="btn btn-primary mx-auto" href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" role="button" target='_blank'>Downlade</a>                        
                        </div>
                      </div>
                  </div>
                  <div className='col-md-3 col-9 mx-auto'>
                      <div className='p-2'>
                        <img src={parent} alt="" className='img-fluid rounded-circle d-block mx-auto border' style={{height:"25vh"}}/>
                        <p className='text-center py-1 fs-6'>Parent Guidelines</p>
                        <div className='col-5 mx-auto'>
                          <a class="btn btn-primary mx-auto" href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" role="button" target='_blank'>Downlade</a>                        
                        </div>
                      </div>
                  </div>
                  <div className='col-md-3 col-9 mx-auto'>
                      <div className='p-2'>
                        <img src={uniform} alt="" className='img-fluid rounded-circle d-block mx-auto border' style={{height:"25vh"}}/>
                        <p className='text-center py-1 fs-6'>Uniform & Dress Code Policy</p>
                        <div className='col-5 mx-auto'>
                          <a class="btn btn-primary mx-auto" href="https://drive.google.com/file/d/1lTATmmBEW53SQ6v9YsjFV3mYqK4dUoVl/view" role="button" target='_blank'>Downlade</a>                        
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

          {footer()}
    </>
  )
}
