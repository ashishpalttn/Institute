import React, { useEffect } from "react";
import { CarouselComponent } from "../../shared-components/carousel/CarouselComponent";
import { homePageData } from "../../dummyData/homePageData";
import Section from "../../shared-components/Section";
import { CustomCard } from "../../shared-components/CustomCard";
import CoursesPage, { RenderCourses } from "../courses/CoursesPage";
import { useTranslation } from "react-i18next";
import { getSheetDBData } from "../../dummyData/sheetDb/sheetDb";


const HomePage = () => {
  useEffect(()=>{
    // getSheetDBData()
  },[])
  const {t} = useTranslation();
  return (
    <div className="bg-primary-50 pb-2">
      <CarouselComponent
        data={homePageData.carouselData}
        autoSlide={true}
        autoSlideInterval={3000}
      />
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Welcome to ABC Coaching Center
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            {t('welcome')}
          </h1>
          <p className="text-lg text-gray-700">
            Empowering students to achieve their academic goals.
          </p>
        </header>

        <Section title="Our Courses">
          <RenderCourses/>
        </Section>

        <Section title="Testimonials">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {homePageData.testimonials.map((testimonial, index) => (
              <CustomCard key={index}>
                <div className="p-4">
                <p>{testimonial.text}</p>
                <p className="mt-4 font-bold">- {testimonial.author}</p>
                </div>
              </CustomCard>
            ))}
          </div>
        </Section>

        <Section title="Contact Us">
          <CustomCard>
          <div className="p-4">
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
          </CustomCard>
        </Section>
      </div>
    </div>
  );
};

export default HomePage;
