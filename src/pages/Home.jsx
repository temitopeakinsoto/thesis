import React, { useState } from "react";
import WebcamVideo from "../components/WebcamVideo";
import { Flex, Button } from "@chakra-ui/react";
import "../../src/App.css";

function Home() {
  const [userReaction, setUserReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setUserReaction(reaction);
  };

  return (
    <div style={{ margin: "120px 20px" }}>
      <Flex>
        <div className="topRight">
          <WebcamVideo />
        </div>
        {/* <div>
          <button onClick={handleRunScript}>Run Script</button>
        </div>*/}
        {/* <div className="frame">
          <iframe
            width="560px"
            height="500px"
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0?autoplay=1&cc_load_policy=1&mute=1"
            allow="autoplay"
          />
        </div> */}
      </Flex>
      <div>
        <Flex align="center" justify="center" columnGap={4}>
          <h2>Drop a like</h2>
          <Button onClick={() => handleReactionClick("👍")} size="lg">
            👍
          </Button>
          <Button onClick={() => handleReactionClick("👏")} size="lg">
            👏
          </Button>
          <Button onClick={() => handleReactionClick("😊")} size="lg">
            😊
          </Button>
        </Flex>
        {userReaction && (
          <div className="user-reaction-text">
            Your reaction: {userReaction}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
