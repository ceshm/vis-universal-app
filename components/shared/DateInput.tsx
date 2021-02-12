import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import DateTimePicker from './DateTimePicker';
import styled from 'styled-components/native';
import i18n from 'i18n-js';

const Container = styled.View`
  padding: 16px;
`;

const DateButton = styled.TouchableHighlight<any>`
  background-color: white;
  padding-horizontal: 16px;
  padding-vertical: 12px;
  border-radius: 8px;
  border-bottom-left-radius: ${({ show }) => show ? 0 : 8}px;
  border-bottom-right-radius: ${({ show }) => show ? 0 : 8}px;

  border-bottom-color: lightgray;
  border-bottom-width: ${({ show }) => show ? 1 : 0}px;
`;

const DateLabel = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const DateText = styled.Text`
  font-size: 16px;
  color: dodgerblue;
`;

const DatePickerContainer = styled.View`
  padding: 16px;
  padding-bottom: 0;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const localDateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function DateInput({ date, onChange }: any) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <DateButton
        onPress={() => {
          const setTo = Platform.OS === 'android' ? true : !show;
          setShow(setTo);
        }}
        activeOpacity={1}
        underlayColor="lightgray"
        show={show}
      >
        <View>
          <DateLabel>Date</DateLabel>
          <DateText>{date.toLocaleDateString(undefined, localDateOpts)}</DateText>
          <DateText>{i18n.l('date.formats.short', date)}</DateText>
          <DateText>{i18n.strftime(date, '%A, %d %B %Y')}</DateText>
        </View>
      </DateButton>

      {show && (
        <DatePickerContainer>
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
        </DatePickerContainer>
      )}
    </Container>
  );
}

export default DateInput;
