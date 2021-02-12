import React, { useState } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View } from 'react-native';

function DefaultModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              style={{ backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default DefaultModal;
