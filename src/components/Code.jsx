import { CodeBlock, atomOneLight  } from "react-code-blocks";
import styled from "styled-components"

const Kuch = styled.div`
background-color:"#0047ab";
// margin:30px;
padding:0px;
`

function MyCoolCodeBlock({ code, language, showLineNumbers, startingLineNumber }) {
    const x =`
    import React from "react";
    import ReactDOM from "react-dom";
    import "./index.css";
    import App from "./App";
    
    ReactDOM.render(
      <SugerSyntax>
        <App />
      </SugerSyntax>,
      document.getElementById("root")
    );
    
    `
    const lang = "java"
  return (
      <Kuch>
    <CodeBlock 
      text={x}
      language={lang}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={atomOneLight}
    />
    </Kuch>
  );
}
export default MyCoolCodeBlock;