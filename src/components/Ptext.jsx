  
import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1rem;
//   line-height: 1em;
  p{
    font-family: "Segoe UI", sans-serif;

font-weight:bold;
  color: indianred;
    margin:10px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}