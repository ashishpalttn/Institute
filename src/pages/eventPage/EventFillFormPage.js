import React, { useState } from 'react';
import axios from 'axios';

const EventFillFormPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentClass: '',
    mobileNo: '',
    email: '',
    guardianName: "3Jane Doe",
    shortNote: ''
  });

  // Array of form fields to generate the form dynamically
  const formFields = [
    { name: 'studentName', type: 'text', label: 'Student Name', placeholder: 'Enter Student Name' },
    { name: 'studentClass', type: 'text', label: 'Class', placeholder: 'Enter Class' },
    { name: 'mobileNo', type: 'tel', label: 'Mobile No.', placeholder: 'Enter Mobile No.' },
    { name: 'email', type: 'email', label: 'Email ID', placeholder: 'Enter Email ID' },
    { name: 'shortNote', type: 'textarea', label: 'Short Note', placeholder: 'Write a short note...', rows: 4 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/event-registration/registrations`,formData);
      if(response.status===201){
        alert("Registration Successful");
        setFormData({
          studentName: '',
          studentClass: '',
          mobileNo: '',
          email: '',
          shortNote: ''
        })
      }
    }
    catch(error){
      console.log('There was an error!',error)
      alert('There was an error!',);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Image Banner */}
      <div className="w-full h-64">
        <img
          src="https://via.placeholder.com/1920x300"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex-grow p-8 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Event Registration</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dynamically Generated Form Fields */}
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    rows={field.rows || 3}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  />
                )}
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-700 text-white py-2 rounded-md hover:bg-sky-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventFillFormPage;
