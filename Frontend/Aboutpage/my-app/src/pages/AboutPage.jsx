import "./AboutPage.css";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"
import React from 'react'
function AboutPage () {
  return (
    <div className="page-wrapper">
      <Navbar />
      <HeroSection />
        <main className="main-content">
        <div className="row">
          <div className="col-md-5 mt-5">


            <h2 className="title mb-3">Who We Are</h2>
            <p className="text">
              AgencyCMS is a full-service marketing agency helping brands tell their
              stories through powerful content. From strategy to execution, we partner
              with clients to create campaigns that convert and inspire.
            </p>
            <p className="text2">
              Our team of writers, designers, and strategists brings ideas to life
              across digital and traditional channels. We believe great content starts
              with a clear voice and ends with measurable results.
            </p>

          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>


     
  );
};

export default AboutPage;
