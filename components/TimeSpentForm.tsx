import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform, Text } from 'react-native';
import DateInput from './shared/DateInput';

const Container = styled.View`
  border-bottom-color: aqua;
  width: 100%;
`;

function TimeSpentForm() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (event: any, selectedDate: any) => {
    console.log('onDateChange', typeof event, event, typeof selectedDate, selectedDate);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Container>
      <DateInput date={date} onChange={onDateChange} />

    </Container>
  );
}

export default TimeSpentForm;
