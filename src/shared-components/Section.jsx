import React from "react";
import Heading from "./Heading";


const Section = ({ title, children }) => {
  return (
    <section className="mb-12">
      <Heading level={1} text={title} align="center" className="my-4 text-3xl font-bold rounded-3xl bg-primary-700 text-white-700" icon="📘" />
      {children}
    </section>
  );
};

export default Section;
