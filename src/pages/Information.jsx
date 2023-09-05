import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Container, Heading, Button } from "@chakra-ui/react";
import logo from "../../src/images/logo.png";
import { INFORMATION } from "../words";

function InformationSheet() {
  return (
    <Container maxWidth={"900px"} pt={20} textAlign="center">
      <Box textAlign="left">
        <img src={logo} width={["300px", "350px", "400px"]} />
      </Box>
      <Heading size="md" mb={4} mt={4}>
        {INFORMATION.HEADING}
      </Heading>
      <Text mb={4} as="h3">
        (The UH protocol number: SPECS/PGT/UH/05457)
      </Text>
      <Text as="h3">{INFORMATION.TITLE}</Text>

      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          1 Title of study
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">{INFORMATION.STUDYTITLE}</Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          2 Introduction
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">{INFORMATION.INTRODUCTION}</Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">{INFORMATION.LINK}</Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          (after accessing this website, scroll down to Letter S where you will
          find the regulation)
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">Thank you for reading this.</Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          3 What is the purpose of this study?
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">{INFORMATION.PURPOSEOFSTUDY}</Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          4 {INFORMATION.QUESTION4}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">{INFORMATION.ANSWER4}</Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          5 {INFORMATION.QUESTION5}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">{INFORMATION.ANSWER5}</Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          {INFORMATION.QUESTION6}{" "}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          <em>{INFORMATION.ANSWER6}</em>
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          {INFORMATION.QUESTION7}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          The first thing to happen will be <em>{INFORMATION.ANSWER7}</em>
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          8 What are the possible disadvantages, risks or side effects of taking
          part?
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          <em>
            (Note: if appropriate for this particular study, you will be asked
            to agree to any required health screening questionnaire in advance
            of the study. Please also note that circumstances may arise that
            could result in the need for you to withdraw from the study; should
            such circumstances occur, the investigator will discuss the matter
            with you.)
          </em>
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          Participating in the study may involve emotional discomfort due to the
          analysis of facial expressions arising from webcam usage. Privacy
          concerns and potential data breaches are minimized through strict
          security measures. Technical issues with webcam usage and limitations
          in accurately interpreting emotions are possible. While the study aims
          to advance e-learning, there are no direct personal benefits.
          Participants have the right to decline or withdraw without
          consequences, and the research team is available for support and
          clarifications.
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          9 What are the possible benefits of taking part?
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          Participation in this study does not involve any direct benefits to
          you. However, your contribution will help advance the field of emotion
          recognition in e-learning, benefiting future learners and educational
          practices. The potential risks associated with participating are
          minimal. The webcam usage for facial data collection poses no harm,
          and we will take precautions to ensure your comfort throughout the
          study.
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          10 How will my taking part in this study be kept confidential?
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          <em>
            &lt;Applicant: please enter details here; please also indicate how
            any personal data on the completed consent form will be stored; the
            points in items 12 and 13 should be addressed in determining what
            you will do with the consent forms and the information they contain,
            together with the period over which you intend to store them&gt;
          </em>
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          The personal data to be obtained include the facial web stream of the
          participant with a view to analyzing facial expression and emotion.
          Data regarding emotions captured during this study will not be stored.
          All facial emotions tracked and captured during each webcam streaming
          session will only be used to generate an emotion time which will
          predict/suggest the predominant emotion of a participant after the
          study.
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          Personal data collected from the completed consent form study will not
          be retained for more than 6 weeks with an assurance that ALL data
          captured will be completely destroyed under secure conditions on or
          before October 10, 2023
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          11 Audio-visual material
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          &lt;
          <em>
            If you are intending to create audio-visual material, the
            participant must be informed of this. Items 12 and 13 should be
            completed to describe what will happen to this form of recording
            data, in terms of both storage and its transmission/display, and
            whether it might be required for use in further studies.&gt;
          </em>
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          12 What will happen to the data collected within this study?
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          1. The data collected will be stored electronically, in a
          password-protected environment, for 6-8 weeks, after which time it
          will be destroyed under secure conditions;
          <br />
          2. The data will be anonymized prior to storage.
          <br />
          3. The data will be transmitted/displayed in a graphical/line chart on
          a web page immediately after the study is finished. Your identity will
          not be revealed during this process.
          <br />
          4. You will be asked to sign a 'Contributors' Release Form' to allow
          the transmission of the audio/visual material to which you have
          contributed.
        </Text>

        <Text textAlign="justify">
          <ul></ul>
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          <ul></ul>
        </Text>
      </Box>
      <Box mt={4}>
        <Heading textAlign="justify" as="h4">
          13 Will the data be required for use in further studies?
        </Heading>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          The data will not be used in any further studies.
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">14 Who has reviewed this study?</Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">This study has been reviewed by:</Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          The University of Hertfordshire Health, Science, Engineering and
          Technology Ethics Committee with Delegated Authority
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          15 Factors that might put others at risk
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          Please note that if, during the study, any medical conditions or
          non-medical circumstances such as unlawful activity become apparent
          that might or had put others at risk, the University may refer the
          matter to the appropriate authorities and, under such circumstances,
          you will be withdrawn from the study.
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          16 Who can I contact if I have any questions?
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          If you would like further information or would like to discuss any
          details personally, please get in touch with me, in writing, by phone
          or by email:{" "}
          <em>
            <a href="mailto:takinsoto@gmail.com">takinsoto@gmail.com</a>
          </em>
          <em> or 07867385583</em>
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          <strong>
            Although we hope it is not the case, if you have any complaints or
            concerns about any aspect of the way you have been approached or
            treated during the course of this study, please write to the
            University's Secretary and Registrar at the following address:
          </strong>
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          <br />
          Secretary and Registrar <br />
          University of Hertfordshire
          <br />
          College Lane
          <br />
          Hatfield
          <br />
          Herts
          <br />
          AL10 9AB
        </Text>
      </Box>
      <Box mt={4}>
        <Text textAlign="justify">
          Thank you very much for reading this information and giving
          consideration to taking part in this study.
        </Text>
      </Box>

      <Box mt={40} flex>
        <Link to="/consent">
          <Button>Continue</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default InformationSheet;
