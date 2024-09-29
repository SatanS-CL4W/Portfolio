import React from "react";
import ProjectCard from "./ProjectCard";
import hotelRatingImage from "../../assets/1721901645248.jpg"; 
import jobListingImage from "../../assets/1719747429604.jpg";
import ecommerceImage from "../../assets/1711755162090.jpg"; 

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Hotel Rating Service"
          main="In my hotel rating system project, I used Spring Boot to create three microservices: user-service, rating-service, and hotel-service. These manage user data, ratings, and hotel information. I implemented a service registry, API gateway, and config server with Eureka for efficient service management. REST APIs enable smooth communication between services, and I used Postman for testing."
          imagePath={hotelRatingImage} // Updated to use image variable directly
          demoUrl="hotel_rating_demo_url"
          sourceUrl="https://github.com/SatanS-CL4W/Hotel-Rating-System-Using-Microservices"
        />
        <ProjectCard
          title="Job Listing Portal"
          main="The Job-Listing Portal is a comprehensive web application built using Spring Boot, Spring JPA, Thymeleaf, Spring MVC, REST API, HTML, CSS, JavaScript, Bootstrap, and Spring Security. This platform enables employers to post job vacancies and job seekers to browse and apply for positions seamlessly. It features a user-friendly interface with dynamic content rendered by Thymeleaf, responsive design with Bootstrap."
          imagePath={jobListingImage} // Updated to use image variable directly
          demoUrl="job_listing_demo_url"
          sourceUrl="https://github.com/SatanS-CL4W/Job-Listings-Portal"
        />
        <ProjectCard
          title="E-commerce Website"
          main="I have created a basic E-commerce website which is built using a combination of HTML, CSS, Servlet, JSP and Bootstrap for front-end design. For dynamic functionality and server-side processing, I utilized Java-Server Pages (JSP) and Servlets. The backend is powered by a MySQL database, and JDBC connectivity is employed to establish a seamless link between the web application and the database."
          imagePath={ecommerceImage} // Updated to use image variable directly
          demoUrl="ecommerce_demo_url"
          sourceUrl="https://github.com/SatanS-CL4W/E-Commerce-Website"
        />
      </div>
    </div>
  );
};

export default Projects;
