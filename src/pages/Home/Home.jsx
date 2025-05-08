import React from "react";
import SliderHero from "../../components/SliderHero/SliderHero";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import FaqSection from "../FaqSection/FaqSection";
import EventFeature from "../../components/EventFeature/EventFeature";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Eventora | Home</title>
      </Helmet>

      <SliderHero></SliderHero>
      <section className="upcoming-event-section">
        <UpcomingEvents></UpcomingEvents>
      </section>

      <section className="event-feature-section">
        <EventFeature></EventFeature>
      </section>

      <section className="FaqSection">
        <FaqSection></FaqSection>
      </section>
    </div>
  );
};

export default Home;
