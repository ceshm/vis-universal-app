import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from './DateTimePicker';
import styled from 'styled-components/native';

const DateButton = styled.TouchableHighlight`
  background-color: white;
  padding: 12px;
  border-radius: 8px;

  border-width: 1px;
  border-color: transparent;
`;

function DateInput({ date, onChange }: any) {
  const [show, setShow] = useState(false);

  return (
    <View>
      <DateButton
        onPress={() => console.log('no op')}
        activeOpacity={1}
        underlayColor="lightgray"
      >
        <View>
          <Text>Date</Text>
          <Text>Today</Text>
        </View>
      </DateButton>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

export default DateInput;
