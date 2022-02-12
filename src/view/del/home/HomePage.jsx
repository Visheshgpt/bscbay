import React from "react";
import { Head } from "../../../components/Head";
import HomeSectionOne from "./sections/HomeSectionOne";
import HomeSectionTwo from "./sections/HomeSectionTwo";
import HomeSectionThree from "./sections/HomeSectionThree";
import HomeSectionFour from "./sections/HomeSectionFour";
import HomeSectionFive from "./sections/HomeSectionFive";
import HomeSectionRoadmap from "./sections/HomeSectionRoadmap";
import HomeSectionSix from "./sections/HomeSectionSix";
import HomeSectionSeven from "./sections/HomeSectionSeven";
import TieredSystemSection from "./sections/TieredSystemSection";
import HomeSectionPartnership from "./sections/HomeSectionPartnership";
import { Navbar } from "../../navbar/Navbar.jsx";

const HomePage = () => {
  return (
    <section className="flex-fill">
      <Navbar />
      <Head title="Home" />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      {/* <TieredSystemSection /> */}
      <HomeSectionFour />
      <HomeSectionSeven />
      <HomeSectionFive />
      <HomeSectionPartnership />
      <HomeSectionRoadmap />
      <HomeSectionSix />
    </section>
  );
};

export default HomePage;
