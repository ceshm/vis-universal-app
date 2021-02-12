import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform, Text, View } from 'react-native';
import DateInput from './shared/DateInput';

const Container = styled.View`
  border-bottom-color: aqua;
  min-width: 200px;
`;

function TimeSpentForm() {
  const [date, setDate] = useState(new Date(1598051730000));

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Container>
      <Text>{Platform.OS}</Text>

      <DateInput date={date} onChange={onDateChange} />

    </Container>
  );
}

export default TimeSpentForm;
