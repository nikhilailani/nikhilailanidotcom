import AboutSection from "./components/homepage/about-section";
import Blog from "./components/homepage/blog";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Education />
      <Blog blogs={blogs} />
    </>
  )
};