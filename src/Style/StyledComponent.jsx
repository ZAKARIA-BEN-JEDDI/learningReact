import React from 'react';
import styled from 'styled-components';

class StyledComponent extends React.Component {
  render() {
    const Div = styled.div`
      margin: 20px;
      border: 5px dashed green;
      &:hover {
        background-color: blue;
      }
    `;

    const Title = styled.h1`
      font-family: Arial;
      font-size: 35px;
      text-align: center;
      color: palevioletred;
    `;

    const Paragraphe = styled.h1`
      font-family:Arial;
      font-size:35px;
      text-align:center;
      color:lightgreen;
    `;

    return (
      <div>
        <Title>Styled Component Title</Title>
        <p></p>
        <Div hoverColor="Orange">
          <Paragraphe>Bonjour a tous</Paragraphe>
        </Div>
      </div>
    );
  }
}

export default StyledComponent;

    