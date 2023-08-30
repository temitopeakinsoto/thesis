import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import { QUESTIONNAIRE } from "../words";
import "../../src/App.css";
import logo from "../../src/images/logo.png";

import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  Input,
  Text,
  Spacer,
  Heading,
} from "@chakra-ui/react";

const Questionnaire = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/submit_form",
        values
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container>
      <Box p={4} bg="gray.100" borderRadius="md">
        <Formik
          initialValues={{
            code: "",
            age: "",
            gender: "",
            ethnicity: "",
            education: "",
            elearningFrequency: "",
            overallexperience: 0,
            comfortabilitylevel: 0,
            accuracylevel: 0,
            technicalissues: "",
            timelyfeedback: "",
            timestamp: "",
            user_id: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="consent-form">
              <Box textAlign="left">
                <img src={logo} width="300" />
              </Box>
              <br />
              <Heading mb={4}>{QUESTIONNAIRE.HEADING}</Heading>
              <Text mb={4} as="h3">
                (The UH protocol number: SPECS/PGT/UH/05457)
              </Text>
              <Heading mb={4}>{QUESTIONNAIRE.TITLE}</Heading>

              <Spacer />
              <Stack spacing={15}>
                <Heading>Questionnaire</Heading>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {QUESTIONNAIRE.INTRODUCTION}
                  </Text>
                </FormControl>

                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    Please provide your anonymity Code
                    <Input
                      type="text"
                      name="code"
                      value={values.code}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} mr={10} textAlign="justify">
                    Please tell us your age
                    <Input
                      type="number"
                      name="age"
                      value={values.age}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px solid gray"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    What is your gender
                    <select
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="Black">Male</option>
                      <option value="White">Female</option>
                      <option value="White">Non-Binary</option>
                      <option value="White">Prefer not to say</option>
                      <option value="Asian">Other</option>
                    </select>
                  </Text>
                </FormControl>

                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    What is your ethnicity/Race
                    <select
                      name="ethnicity"
                      value={values.ethnicity}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>

                      <option value="asian">
                        Asian, Asian British or Asian Welsh
                      </option>
                      <option value="black">
                        Black, Black British, Black Welsh, Caribbean or African
                      </option>
                      <option value="mixed">
                        Mixed or Multiple ethnic groups
                      </option>
                      <option value="white-uk">
                        White: English, Welsh, Scottish, Northern Irish or
                        British
                      </option>
                      <option value="white-irish">White: Irish</option>
                      <option value="white-other">
                        White: Gypsy or Irish Traveller, Roma or Other White
                      </option>
                      <option value="other">Other Ethnic Group</option>
                      <option value="n/a">Does Not Apply</option>
                    </select>
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    Tell us your highest level of education:
                    <select
                      name="education"
                      value={values.education}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="High School or Below">
                        High School or Below
                      </option>
                      <option value="Some College/Associate Degree">
                        Some College/Associate Degree
                      </option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option value="Master's Degree or Higher">
                        Master's Degree or Higher
                      </option>
                    </select>
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    How often do you engage in e-learning activities via online
                    platforms?{" "}
                    <select
                      name="elearningFrequency"
                      value={values.elearningFrequency}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Rarely">Rarely</option>
                      <option value="Never">Never</option>
                    </select>
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    On a scale of 1 - 10 (10 Being the highest), how would you
                    rate your overall experience with using the emotion
                    recognition app?
                    <select
                      name="overallexperience"
                      value={values.overallexperience}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    On a scale of 1 - 10 (10 Being the highest), How comfortable
                    were you using the emotion recognition system during the
                    session?
                    <select
                      name="comfortabilitylevel"
                      value={values.comfortabilitylevel}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    On a scale of 1-10 (10 Being the highest), How accurately
                    did the system detect your emotional state/facial
                    expressions?{" "}
                    <select
                      name="accuracylevel"
                      value={values.accuracylevel}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    Were there any technical issues or challenges while using
                    the emotion recognition app? If yes, please specify
                    <Input
                      type="text"
                      name="technicalissues"
                      value={values.technicalissues}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                    />
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    Did the system provide timely and relevant feedback to your
                    emotional state based on your facial expression during the
                    session?
                    <select
                      name="timelyfeedback"
                      value={values.timelyfeedback}
                      onChange={handleChange}
                      style={{
                        width: "200px",
                        marginLeft: "40px",
                        border: "none",
                        borderBottom: "1px dotted",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      <option value="">Select</option>
                      <option value="YES">YES</option>
                      <option value="NO">NO</option>
                    </select>
                  </Text>
                </FormControl>
                <Text mt={10}>
                  Thank you for taking the time to complete this questionnaire.
                  Your feedback is invaluable for improving our emotion
                  recognition app for e-learning purposes.
                </Text>
              </Stack>

              <Text>
                Name of (principal) investigator:{" "}
                <b> TEMITOPE SAMSON AKINSOTO</b>
              </Text>

              <Button type="submit" colorScheme="teal" size="xs">
                <Link to="/">Back</Link>
              </Button>
              <Button>
                <Link to="/consent">Continue</Link>
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Questionnaire;
