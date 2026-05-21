import React, { useState } from 'react';
import './AboutPage.css';   

const AboutPage = () => {
 
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">About Our Agency</h1>
          <p className="lead mb-0 about-hero-subtitle">  
            We craft compelling marketing stories that move people.
          </p>
        </div>
      </section>

      
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
          
            <div className="col-md-6">
              <h2 className="mb-3">Who We Are</h2>
              <p className="text-muted">
                AgencyCMS is a full-service marketing agency helping brands tell
                their stories through powerful content. From strategy to
                execution, we partner with clients to create campaigns that
                convert and inspire.
              </p>
              <p className="text-muted">
                Our team of writers, designers, and strategists brings ideas to
                life across digital and traditional channels. We believe great
                content starts with a clear voice and ends with measurable
                results.
              </p>
            
            </div>

            {/* Right column: Contact form */}
            <div className="col-md-6">
              <div className="contact-card">   
                <h3 className="mb-4">Get In Touch</h3>

                {submitted && (
                  <div className="alert alert-success d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill"></i>
                    Thanks! We'll be in touch soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-semibold submit-btn"   
                  >
                    <i className="bi bi-send me-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;