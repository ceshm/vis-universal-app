import React, { useState } from 'react';
import { View, Platform, LayoutAnimation } from 'react-native';
import DateTimePicker from './DateTimePicker';
import styled from 'styled-components/native';
import i18n from 'i18n-js';
import CollapsiblePicker from './CollapsiblePicker';

const Container = styled.View`
`;

// const localDateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function DateInput({ date, onChange }: any) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <CollapsiblePicker
        show={show}
        setShow={setShow}
        label="Date"
        value={i18n.strftime(date, '%A, %B %d, %Y')}
      >
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={(event: any, selectedDate: any) => {
            if (Platform.OS === 'android') setShow(false);
            onChange(event, selectedDate);
          }}
        />
      </CollapsiblePicker>
    </Container>
  );
}

export default DateInput;
