import React from 'react'
import '../../stylesheets/services.css';
import img1 from '../../assets/services/our_services.png'
import img2 from '../../assets/services/dhohar.jpg'
import img3 from '../../assets/services/pension_status.jpg'

function Services() {
  return (
    <section id='services'>
        <div className="container">
            <h3>Our Services</h3>
            <div className='cards'>
                <a className="card">
                    <img src={img1} alt="our services" />
                    <h3>Online Services of Social Welfare Department, GNCTD</h3>
                </a>
                <a className="card">
                    <img src={img2} alt="" />
                    <h3>Online Services of Social Welfare Department, GNCTD</h3>
                </a>
                <a className="card">
                    <img src={img3} alt="" />
                    <h3>Online Services of Social Welfare Department, GNCTD</h3>
                </a>
            </div>
            <button className='btn primary'>View All</button>
        </div>
    </section>
  )
}

export default Services