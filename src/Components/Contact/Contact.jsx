import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
     <section className={`bg-name ${styles.bg} `}>
  <div className="container ">
    <div className="row">
      <div className="col-md-12 contact">
        <h1 className='head text-center fw-bolder mt-4'>CONTACT SECTION</h1>
        <div className="info text-center"> <span className="before"></span>
          <span className='icon'><i className="fa-solid fa-star  py-1"></i></span>
          <span className='after'></span></div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="container p-5" id="contact">
          <input type="text" className="form-control mt-4 mb-4" placeholder="UserName" />
          <input type="number" className="form-control mt-4 mb-4" placeholder="UserAge" />
          <input type="email" className="form-control mt-4 mb-4" placeholder="UserEmail" />
          <input type="password" className="form-control mt-4 mb-4" placeholder="UserPassword" />
          <button type="button" className="btn " style={{color:'white', background:'#1ABC9C'}}> send Message </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}