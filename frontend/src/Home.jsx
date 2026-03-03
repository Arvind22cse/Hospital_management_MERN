import React from "react";
import "./Home.css";

import {
  FaHospital,
  FaCalendarCheck,
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaXRay,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaLeaf,
  FaHandHoldingHeart,
} from "react-icons/fa";

import { MdLocalHospital } from "react-icons/md";

const Home = () => {
  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <FaHospital className="logo-icon" />
          <span>Serenity<span className="highlight">Care</span></span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Doctors</a>
          <a href="#">Patients</a>
          <a href="#">Insights</a>
        </div>

        <button className="primary-btn">
          <FaCalendarCheck />
          Emergency / Booking
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge">
            <FaLeaf /> whole-person care
          </span>

          <h1>
            compassionate <span className="highlight">management</span> for modern hospitals
          </h1>

          <p>
            integrated digital platform — unify patient records, staff coordination,
            and smart scheduling all in one healing environment.
          </p>

          <div className="stats">
            <div>
              <h3>12k+</h3>
              <p>daily patients</p>
            </div>
            <div>
              <h3>98%</h3>
              <p>satisfaction</p>
            </div>
            <div>
              <h3>450+</h3>
              <p>specialists</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <MdLocalHospital className="hero-icon" />
        </div>
      </section>

      {/* Departments */}
      <section className="departments">
        <h2>clinical departments</h2>
        <p>expert care across 30+ specialties</p>

        <div className="department-grid">
          <div className="card">
            <FaHeartbeat />
            <h3>Cardiology</h3>
          </div>

          <div className="card">
            <FaBrain />
            <h3>Neurology</h3>
          </div>

          <div className="card">
            <FaBaby />
            <h3>Pediatrics</h3>
          </div>

          <div className="card">
            <FaXRay />
            <h3>Radiology</h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <h3>need immediate assistance?</h3>
          <p><FaPhoneAlt /> 24/7 emergency support</p>
        </div>

        <button className="secondary-btn">
          <FaHandHoldingHeart />
          contact management
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h4>SerenityCare</h4>
        <p>Integrated hospital management with heart.</p>

        <div className="social-icons">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaInstagram />
        </div>

        <p className="copyright">
          © 2025 SerenityCare Health System – All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Home;