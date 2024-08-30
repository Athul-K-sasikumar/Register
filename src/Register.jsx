import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Register() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobileNumber: '',
    email: '',
    course: '',
    gender: '',
    dob: '',
  });

  // State to manage validation messages
  const [validationErrors, setValidationErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form inputs
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Address validation
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }

    // Mobile number validation (basic pattern for demonstration)
    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobileNumber || !mobilePattern.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Valid mobile number is required';
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = 'Valid email address is required';
    }

    // Course selection validation
    if (!formData.course || formData.course === 'Courses') {
      errors.course = 'Please select a course';
    }

    // Gender validation
    if (!formData.gender) {
      errors.gender = 'Please select your gender';
    }

    // Date of Birth validation
    if (!formData.dob) {
      errors.dob = 'Please select your date of birth';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`Data stored successfully!\nName: ${formData.name}\nAddress: ${formData.address}\nMobile Number: ${formData.mobileNumber}\nEmail: ${formData.email}\nCourse: ${formData.course}\nGender: ${formData.gender}\nDate of Birth: ${formData.dob}`);
      // Reset form data
      handleReset();
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobileNumber: '',
      email: '',
      course: '',
      gender: '',
      dob: '',
    });
    setValidationErrors({});
  };

  return (
    <div className='row'>
      <div className="col-2"></div>
      <div style={{ background: '#1E201E', paddingLeft: '30px', paddingRight: "30px", paddingTop: '30px', marginTop: '20px' }} className="col-8 text-light">
        <h2 style={{ color: '#EEEEEE', fontSize: '50px' }} className='text-center pt-3 fw-bolder pb-5'>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label style={{ color: '#EEEEEE' }} className='fw-bolder fs-4 ms-2'>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
            {validationErrors.name && <p className="text-danger">{validationErrors.name}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label className='fw-bolder fs-4 ms-2' style={{ color: '#EEEEEE' }}>Address</Form.Label>
            <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} />
            {validationErrors.address && <p className="text-danger">{validationErrors.address}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMobileNumber">
            <Form.Label className='fw-bolder fs-4 ms-2' style={{ color: '#EEEEEE' }}>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="225522554" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            {validationErrors.mobileNumber && <p className="text-danger">{validationErrors.mobileNumber}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='fw-bolder fs-4 ms-2' style={{ color: '#EEEEEE' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} />
            {validationErrors.email && <p className="text-danger">{validationErrors.email}</p>}
          </Form.Group>

          <p className='fw-bolder fs-4 ms-2' style={{ color: '#EEEEEE' }}>Courses</p>
          <Form.Select aria-label="Default select example" name="course" value={formData.course} onChange={handleChange}>
            <option>Courses</option>
            <option value="Mearn">Mearn</option>
            <option value="Python">Python</option>
            <option value="Data Science">Data Science</option>
          </Form.Select>
          {validationErrors.course && <p className="text-danger">{validationErrors.course}</p>}

          <Form.Group className="mb-3">
            <Form.Label className='fw-bolder fs-4 ms-2 mt-2' style={{ color: '#EEEEEE' }}>Gender</Form.Label>
            <Form.Check
              type="radio"
              id="male"
              name="gender"
              value="Male"
              label="Male"
              className='text-light fw-bolder'
              onChange={handleChange}
              checked={formData.gender === 'Male'}
            />
            <Form.Check
              type="radio"
              id="female"
              name="gender"
              value="Female"
              label="Female"
              className='text-light fw-bolder'
              onChange={handleChange}
              checked={formData.gender === 'Female'}
            />
            <Form.Check
              type="radio"
              id="other"
              name="gender"
              value="Other"
              label="Other"
              className='text-light fw-bolder'
              onChange={handleChange}
              checked={formData.gender === 'Other'}
            />
            {validationErrors.gender && <p className="text-danger">{validationErrors.gender}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='fw-bolder fs-4 ms-2' style={{ color: '#EEEEEE' }}>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            {validationErrors.dob && <p className="text-danger">{validationErrors.dob}</p>}
          </Form.Group>

          <div className='d-flex justify-content-center mt-3'>
            <button type="submit" className="btn btn-primary me-3 my-4">Submit</button>
            <button type="button" className="btn btn-secondary ms-3 my-4" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Register;
