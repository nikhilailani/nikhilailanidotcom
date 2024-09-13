import React from "react";
import Container from "./Container";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Certificates from "./Certificates";


export default function Home() {
  return (
    <Container id="home">
      <div className="flex flex-wrap">

        <div className="w-full lg:w-9/12 px-2" id="left">
          <Profile />
          <Education />
        </div>

        <div className="w-full lg:w-3/12 mt-2 lg:mt-0 pr-2" id="right">
          <Skills />
          <Certificates />
        </div>

      </div>
    </Container>
  );
}
