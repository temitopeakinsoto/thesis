import React, { useState } from "react";
import WebcamVideo from "../components/WebcamVideo";
// import { Flex } from "@chakra-ui/react";
import "../../src/App.css";

function Home() {
  return (
    <div className="centered-container">
      <div className="video-container">
        <WebcamVideo />
        <iframe
          width="560px"
          height="500"
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0?autoplay=1&cc_load_policy=1&mute=1"
          allow="autoplay"
        />
      </div>
    </div>
  );
}

export default Home;
