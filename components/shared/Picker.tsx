import React from 'react';
import styled from 'styled-components/native';
import RowLink from './RowLink';
import { View } from 'react-native';

const Container = styled.View``;

const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 12px;
`;

function Picker({ options }: any) {
  return (
    <Container>
      <Label>Select an aspect:</Label>
      {options.map((opt: any) => <RowLink label={opt.name} />)}
    </Container>
  );
}

export default Picker;
