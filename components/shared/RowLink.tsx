import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  padding-vertical: 8px;
  border-color: lightgray;
  border-top-width: 1px;
`;

function RowLink({ label }: any) {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  );
}

export default RowLink;
