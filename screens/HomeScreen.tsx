import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import TimeSpentForm from '../components/TimeSpentForm';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ChartSpace = styled.View`
  border-color: gray;
  border-width: 1px;
`;

export default function HomeScreen() {
  return (
    <Container>
      <Title>Tab One</Title>

      <TimeSpentForm />
    </Container>
  );
}
