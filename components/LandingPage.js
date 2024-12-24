"use client";
import React from "react";
import "./LandingPage.css"; // Importing CSS for styling
import Navbar from "./Navbar";
import Image from "next/image";
// import { useRouter } from "next/navigation"; // Import useRouter
import ResumeTemplate from "../assets/resume-template.webp";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h2>
            Elevate Your Job Applications with Our AI-Powered Resume Builder
          </h2>
          <Link href="/resumeBuilder">
            <button className="create-resume-button">Create Resume</button>
          </Link>
        </div>
        <div className="hero-image">
          <div className="resume-template">
            {/* Placeholder for resume template */}
            <Image src={ResumeTemplate} alt="Resume Template" />
          </div>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Resume Builder</h3>
            <p>Create stunning resumes with our easy-to-use builder.</p>
          </div>
          <div className="feature-card">
            <h3>AI Cover Letter Generator</h3>
            <p>
              Generate personalized cover letters tailored to your job
              applications.
            </p>
          </div>
          <div className="feature-card">
            <h3>AI Resume Generator</h3>
            <p>Leverage AI to craft resumes that stand out to employers.</p>
          </div>
        </div>
      </section>
      <section className="benefits">
        <h2>How It Helps Students</h2>
        <p>
          Our tools are designed to help students present their skills and
          experiences effectively, increasing their chances of landing
          interviews and job offers.
        </p>
      </section>
      <footer className="footer">
        <p>&copy; 2023 AI Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
