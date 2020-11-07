import React from "react";
import Education from "./components/Education";
import Header from "./components/Header";
import PersonalProfile from "./components/PersonalProfile";
import Skill from "./components/Skill";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <PersonalProfile />
      <WorkExperience />
      <Skill />
      <Education />
    </>
  );
}

export default App;
