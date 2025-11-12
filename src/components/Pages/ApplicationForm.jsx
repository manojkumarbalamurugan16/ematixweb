import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../Pages/ApplicationForm.module.css";

const ApplicationForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get("jobId"); // Retrieve jobId from query parameters

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    qualification: "",
    branch: "",
    noticePeriod: "",
    experience: "",
    address: "",
    mobile: "",
    email: "",
    institution: "",
    cgpa: "",
    skills: "",
    jobRole: jobId || "",
    resume: null, // File upload
  });

  const jobRoles = [
    "Non-Voice Process Executive",
    "Web Developer Intern",
    "UI/UX Developer",
    "PCB Designer Intern",
    "Other",
  ]; // Job roles for the dropdown

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataObj = new FormData();
    formDataObj.append('fullName', formData.fullName);
    formDataObj.append('dob', formData.dob);
    formDataObj.append('qualification', formData.qualification);
    formDataObj.append('branch', formData.branch);
    formDataObj.append('noticePeriod', formData.noticePeriod);
    formDataObj.append('experience', formData.experience);
    formDataObj.append('address', formData.address);
    formDataObj.append('mobile', formData.mobile);
    formDataObj.append('email', formData.email);
    formDataObj.append('institution', formData.institution);
    formDataObj.append('cgpa', formData.cgpa);
    formDataObj.append('skills', formData.skills);
    formDataObj.append('jobRole', formData.jobRole);
    formDataObj.append('resume', formData.resume);
  
    try {
      const response = await fetch("https://ematixsolutions.com/api/submit", {
        method: "POST",
        body: formDataObj,  // Sending FormData as the body
      });
  
      if (response.ok) {
        alert('Application submitted successfully!!!!');
        setFormData({
          fullName: "",
          dob: "",
          qualification: "",
          branch: "",
          noticePeriod: "",
          experience: "",
          address: "",
          mobile: "",
          email: "",
          institution: "",
          cgpa: "",
          skills: "",
          jobRole: "",
          resume: null,
        });
      } else {
        const result = await response.json();
        console.error(result);
        alert('Failed to submit application: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting your application.');
    }
  };
  
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Application Form</h1>
      <form className={styles.form} onSubmit={handleSubmit} action="/api/submit" method="POST" enctype="multipart/form-data">

        {/* Full Name */}
        <div className={styles.inputGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className={styles.inputGroup}>
          <label htmlFor="dob" className={styles.label}>
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Qualification */}
        <div className={styles.inputGroup}>
          <label htmlFor="qualification" className={styles.label}>
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            placeholder="Enter your qualification"
            value={formData.qualification}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Branch */}
        <div className={styles.inputGroup}>
          <label htmlFor="branch" className={styles.label}>
            Branch
          </label>
          <input
            type="text"
            id="branch"
            placeholder="Enter your branch"
            value={formData.branch}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Notice Period */}
        <div className={styles.inputGroup}>
          <label htmlFor="noticePeriod" className={styles.label}>
            Notice Period
          </label>
          <input
            type="text"
            id="noticePeriod"
            placeholder="Enter your notice period in months"
            value={formData.noticePeriod}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Experience */}
        <div className={styles.inputGroup}>
          <label htmlFor="experience" className={styles.label}>
            Experience (in years)
          </label>
          <input
            type="number"
            id="experience"
            placeholder="Enter your experience in years"
            value={formData.experience}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Address */}
        <div className={styles.inputGroup}>
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <textarea
            id="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </div>

        {/* Mobile Number */}
        <div className={styles.inputGroup}>
          <label htmlFor="mobile" className={styles.label}>
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Email ID */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email ID
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email ID"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Name of Institution */}
        <div className={styles.inputGroup}>
          <label htmlFor="institution" className={styles.label}>
            Name of Institution
          </label>
          <input
            type="text"
            id="institution"
            placeholder="Enter your institution name"
            value={formData.institution}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* CGPA */}
        <div className={styles.inputGroup}>
          <label htmlFor="cgpa" className={styles.label}>
            CGPA
          </label>
          <input
            type="number"
            id="cgpa"
            placeholder="Enter your CGPA"
            value={formData.cgpa}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Skills */}
        <div className={styles.inputGroup}>
          <label htmlFor="skills" className={styles.label}>
            Skills
          </label>
          <textarea
            id="skills"
            placeholder="List your skills"
            value={formData.skills}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </div>

        {/* Job Role Dropdown */}
        <div className={styles.inputGroup}>
          <label htmlFor="jobRole" className={styles.label}>
            Job Role
          </label>
          <select
            id="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="" disabled>
              Select your job role
            </option>
            {jobRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Resume File Upload */}
        <div className={styles.inputGroup}>
          <label htmlFor="resume" className={styles.label}>
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className={styles.input}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
