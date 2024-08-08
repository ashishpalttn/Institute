import React from "react";
import { CarouselComponent } from "../../shared-components/carousel/CarouselComponent";

const HomePage = () => {
  return (
    <div className="bg-gray-100 pb-2">
      <CarouselComponent autoSlide={true} autoSlideInterval={3000}/>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Welcome to ABC Coaching Center
          </h1>
          <p className="text-lg text-gray-700">
            Empowering students to achieve their academic goals.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Mathematics</h3>
              <p>
                Comprehensive math courses designed to help students excel in
                their studies.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Science</h3>
              <p>
                Engaging science courses that cover the fundamentals and
                advanced topics.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">English</h3>
              <p>
                Enhance your language skills with our expert-led English
                courses.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">History</h3>
              <p>Explore the past with our comprehensive history courses.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Geography</h3>
              <p>
                Understand the world better with our detailed geography courses.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Computer Science</h3>
              <p>
                Learn the latest in technology with our computer science
                courses.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p>
                "ABC Coaching Center has transformed my academic journey. The
                teachers are amazing and the courses are top-notch!"
              </p>
              <p className="mt-4 font-bold">- Student A</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p>
                "I have improved so much since joining ABC Coaching Center.
                Highly recommend to anyone looking to excel."
              </p>
              <p className="mt-4 font-bold">- Student B</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p>
              If you have any questions or would like to enroll, please contact
              us:
            </p>
            <p className="mt-4">
              <span className="font-bold">Email:</span> info@abccoaching.com
            </p>
            <p>
              <span className="font-bold">Phone:</span> (123) 456-7890
            </p>
            <p>
              <span className="font-bold">Address:</span> 123 Main St, Anytown,
              USA
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
