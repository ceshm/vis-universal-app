import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import CollapsiblePicker from '../CollapsiblePicker';
import RowLink from '../RowLink';

const Container = styled.View`
`;

const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 12px;
`;

const dummyAspects = [
  {
    name: 'Ficción',
    children: [
      {
        name: 'Anime',
      },
      {
        name: 'Novelas',
      },
    ],
  },
  {
    name: 'Descanso',
  },
  {
    name: 'Salud Mental',
  },
];

function Index() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <CollapsiblePicker
        show={show}
        setShow={setShow}
        label="Aspect"
        value="value"
        horizontalLayout
      >
        <View>
          <Label>Select an aspect:</Label>
          {dummyAspects.map(aspect => <RowLink label={aspect.name} />)}
        </View>
      </CollapsiblePicker>
    </Container>
  );
}

export default Index;
