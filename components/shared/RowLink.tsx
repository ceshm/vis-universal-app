import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.TouchableHighlight`
  padding-vertical: 12px;
  padding-horizontal: 12px;
  border-color: lightgray;
  border-top-width: 1px;
`;

const Label = styled.Text`
  font-size: 16px;
`;

function RowLink({ label }: any) {
  return (
    <Container
      onPress={() => {}}
      activeOpacity={1}
      underlayColor="lightgray"
    >
      <Label>{label}</Label>
    </Container>
  );
}

export default RowLink;
