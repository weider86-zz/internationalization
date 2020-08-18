import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  margin: 20px;
  padding: 0;
  outline: none;
  line-height: 0;
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => (props.active ? 'cadetBlue' : 'white')};
  &:hover {
    cursor: pointer;
  }
`;
