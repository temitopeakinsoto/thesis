import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button, Container } from "@chakra-ui/react";
const url = "http://localhost:5000/get_data";

export default function Start() {
  const [emotionData, setEmotionData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log("datat is+++s", data);
      })
      .catch();
  }, []);

  return (
    <Container className="consent-form">
      <p>
        a short video clip, not longer than 5 minutes, which will be played for
        you to watch. The purpose of the video is to elicit emotions of joy,
        laughter etc. While this video is being watched, the emotion recognition
        system will collect and analyse facial expression data through your
        computers webcam. The different facial expressions predicted by the app
        will be visible for you to see and decide if it matches the actual
        facial expression/emotion showed by you. After the completion of this
        session, you are free to exit the study as your involvement in the study
        would have been completed. A questionnaire with no more than 7-8
        questions will be used to capture your feedback about using the emotion
        recognition app.
      </p>
      <Link to="/app">
        <Button style={{ marginRight: "10px" }}>Back</Button>
      </Link>
      <Link to="/app">
        <Button>Start</Button>
      </Link>
    </Container>
  );
}
