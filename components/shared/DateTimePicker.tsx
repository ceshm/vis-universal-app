import React from 'react';
import MobileDateTimePicker from '@react-native-community/datetimepicker';
import { Platform, Text, View } from 'react-native';

function DateTimePicker(props: any) {
  if (Platform.OS === 'web') {
    return (
      <View>
        <Text>THis is web datetimepicker</Text>
      </View>
    );
  }
  return MobileDateTimePicker(props);
}

export default DateTimePicker;
