import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import WORDS from "../words";
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

const ConsentForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Container>
      <Box p={4} bg="gray.100" borderRadius="md">
        <Formik
          initialValues={{
            termsandcondition: "",
            signatureParticipant: "",
            dateParticipant: formattedToday,
            signatureInvestigator: "",
            dateInvestigator: formattedToday,
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="consent-form">
              <Box textAlign="left">
                <img src={logo} width="300" />
              </Box>
              <br />
              <Heading mb={4}>{WORDS.HEADING}</Heading>
              <Heading mb={4}>{WORDS.RESEARCHTITLE} </Heading>
              <Heading mb={4}> {WORDS.FORMTITLE}</Heading>
              <Spacer />
              <Stack spacing={15}>
                {WORDS.FORMTITLE2}

                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE1}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE2}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE3}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE4}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE5}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE6}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE7}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    {WORDS.LINE8}
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    <b>Signature of participant</b>

                    <Input
                      type="text"
                      name="signatureParticipant"
                      value={values.signatureParticipant}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                      required
                    />
                    <b>Date</b>
                    <Input
                      type="date"
                      name="dateParticipant"
                      value={values.dateParticipant}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                      required
                    />
                  </Text>
                </FormControl>
                <FormControl mb={4}>
                  <Text mt={10} textAlign="justify">
                    <b>Signature of (principal) investigator</b>

                    <Input
                      type="text"
                      name="signatureInvestigator"
                      value={values.signatureInvestigator}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                      required
                    />
                    <ErrorMessage
                      name="signatureParticipant"
                      component="div"
                      className="error"
                    />

                    <b>Date</b>
                    <Input
                      type="date"
                      name="dateInvestigator"
                      value={values.dateInvestigator}
                      onChange={handleChange}
                      border="none"
                      borderBottom="1px dotted"
                      borderTop="none"
                      borderLeft="none"
                      borderRight="none"
                      required
                    />
                  </Text>
                </FormControl>
                <FormControl>
                  <Input
                    type="checkbox"
                    name="termsandcondition"
                    value={values.termsandcondition}
                    //onChange={handleChange}
                    border="none"
                    borderBottom="1px dotted"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    checked={isChecked}
                    onChange={(e) => {
                      handleChange(e);
                      setIsChecked(e.target.checked);
                    }}
                  />
                </FormControl>
              </Stack>

              <Text>
                Name of (principal) investigator:{" "}
                <b> TEMITOPE SAMSON AKINSOTO</b>
              </Text>

              <Link to="/app">
                <input disabled={!isChecked} type="submit" value="Continue" />
              </Link>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ConsentForm;
