import React from "react";
import { contactUsData } from "../../dummyData/contecatUsData";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">{contactUsData.title}</h1>
        <p className="text-center text-gray-600 mb-8">{contactUsData.description}</p>

        <div className="mb-8">
          <h2 className="text-xl font-medium mb-2">Contact Information</h2>
          <p className="text-gray-600"><strong>Address:</strong> {contactUsData.address}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {contactUsData.phone}</p>
          <p className="text-gray-600"><strong>Email:</strong> {contactUsData.email}</p>
        </div>

        <form className="space-y-4">
          {contactUsData.formFields.map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  rows="4"
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
