import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <section className={`bg-name ${styles.bgabout}  `}>

<div className="container">
  <div className="row">
    <div className={`col-md-12  ${styles.div}`}>
      <h1 className='head text-center fw-bolder text-white '> ABOUT COMPONENT</h1>
    </div>
  </div>
</div>
<div className="info text-center mb-4"> <span className="before"></span>
          <span className='icon'><i className="fa-solid fa-star  py-1"></i></span>
          <span className='after'></span></div>
<div className="container">
  <div className="row">
    <div className="col-md-6 ">
      <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className="col-md-6 ">
      <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>

</div>
    </section>
    </>
  )
}