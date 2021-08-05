import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
     font-family: 'Monument Extended';
    font-size: 1rem;
    color:black;
  }
  h2 {
    font-family: 'Monument Extended';
    font-size: 1rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color:black;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function Head({
  heading = 'need heading'
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}