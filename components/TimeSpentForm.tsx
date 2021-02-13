import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { useMediaQuery } from 'react-responsive';

import DateInput from './shared/DateInput';
import AspectPicker from './shared/AspectPicker';
import Breakpoints from '../constants/Breakpoints';


const Container = styled.ScrollView`
  border-bottom-color: aqua;
  flex: 1;
  width: 100%;
`;

const Form = styled.View<any>`
  flex: 1;
  padding: 16px;
  width: ${({ isMobile }) => isMobile ? 100 : 50}%;
`;

const BottomContainer = styled.View`
  align-items: flex-end;

  padding: 16px;
`;

function TimeSpentForm() {
  const [date, setDate] = useState(new Date());

  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
    // alternatively...
    query: '(max-device-width: 1224px)',
  });

  const onDateChange = (event: any, selectedDate: any) => {
    console.log('onDateChange', typeof event, event, typeof selectedDate, selectedDate);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Container>
      <Form isMobile={isTabletOrMobileDevice}>
        <DateInput date={date} onChange={onDateChange} />

        <AspectPicker />
        <AspectPicker />
      </Form>
    </Container>
  );
}

export default TimeSpentForm;
