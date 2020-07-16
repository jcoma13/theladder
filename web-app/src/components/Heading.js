import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 4.3em;
  padding: 8px;
  text-align: center;
`;

const Description = styled.h4`
  font-size: 1.3em;
  text-align: center;
`;

const Container = styled.div`
  margin: 8px;
`;

const Heading = () => {
  var text =
    "Enter text into the boxes.\nDrag and drop the boxes to re-order the ladder.\n Click the 'Add Rung' button to add more slots on your ladder.\n";

  return (
    <Container>
      <Title>The Ladder</Title>
      <Description>
        {text.split("\n").map((i, key) => {
          return <div key={key}>{i}</div>;
        })}
      </Description>
    </Container>
  );
};

export default Heading;
