// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ultrices felis, sit amet gravida lectus. Sed aliquet, lacus in
              aliquet varius, arcu felis varius quam, et tempus mi nisi in
              mauris. Praesent pharetra, augue sit amet tempus fermentum, ligula
              quam scelerisque lorem, non posuere nunc est non nulla. Morbi
              gravida arcu at purus euismod varius.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Proin vitae velit aliquam, convallis lorem eget, bibendum nisl.
              Mauris faucibus ex ut sem pretium, nec egestas libero luctus.
              Nullam non justo vitae lacus fermentum volutpat. Nam vitae lacus
              nulla. Integer posuere ligula vitae mi dignissim, id ullamcorper
              magna tincidunt.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p>
              Integer fringilla orci eget erat convallis, ut fringilla mauris
              mollis. Aenean nec enim id lorem varius bibendum. Fusce fringilla
              velit at nunc sagittis, in efficitur sapien luctus. In hac
              habitasse platea dictumst. Suspendisse potenti. Curabitur sed
              turpis et orci vestibulum aliquam id et felis.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
