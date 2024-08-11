import React from "react";

const Section = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
