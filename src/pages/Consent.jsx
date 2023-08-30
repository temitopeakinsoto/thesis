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
    <Container className="consent-form">
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
            <Form style={{ border: "5px solid white" }}>
              <Box textAlign="left">
                <img src={logo} width="300" />
              </Box>
              <br />
              <Heading fontSize={["xl", "2xl", "3xl", "4xl"]} mb={4}>
                {WORDS.HEADING}
              </Heading>
              <Heading fontSize={["xl", "2xl", "3xl", "4xl"]} mb={4}>
                {WORDS.RESEARCHTITLE}{" "}
              </Heading>
              <Heading fontSize={["xl", "2xl", "3xl", "4xl"]} mb={4}>
                {" "}
                {WORDS.FORMTITLE}
              </Heading>
              <Spacer />
              <Text mb={4} as="h3">
                (The UH protocol number: SPECS/PGT/UH/05457)
              </Text>
              <Stack spacing={{ base: 4, md: 8 }}>
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
                  By clicking this checkbox, you do give consent for
                  participating in this study{" "}
                </FormControl>
              </Stack>

              <Text mt={50}>
                Principal investigator: <b> TEMITOPE SAMSON AKINSOTO</b>
              </Text>

              <Link to="/">
                {" "}
                <Button type="submit" colorScheme="teal" size="lg" mr={20}>
                  Back
                </Button>
              </Link>
              <Link to="/start">
                <input
                  className="consent-submit"
                  disabled={!isChecked}
                  type="submit"
                  value="Continue"
                />
              </Link>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ConsentForm;
