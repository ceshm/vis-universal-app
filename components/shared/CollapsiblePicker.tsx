import React from 'react';
import styled from 'styled-components/native';
import { LayoutAnimation, Platform, View } from 'react-native';

const Container = styled.View`
  margin-bottom: 16px;
`;

const HeaderButton = styled.TouchableHighlight<any>`
  background-color: white;
  padding-horizontal: 16px;
  padding-vertical: 12px;
  border-radius: 8px;
  border-bottom-left-radius: ${({ show }) => show ? 0 : 8}px;
  border-bottom-right-radius: ${({ show }) => show ? 0 : 8}px;

  border-bottom-color: lightgray;
  border-bottom-width: ${({ show }) => show ? 1 : 0}px;
`;

const Header = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const Tagline = styled.Text`
  font-size: 16px;
  color: dodgerblue;
`;

const Content = styled.View`
  padding: 16px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

function CollapsiblePicker(props: any) {
  const {
    show,
    setShow,
    children,
    label = 'Header',
    value = 'Tagline',
    horizontalLayout = false,
  } = props;

  return (
    <Container>
      <HeaderButton
        onPress={() => {
          const setTo = Platform.OS === 'android' ? true : !show;
          setShow(setTo);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }}
        activeOpacity={1}
        underlayColor="lightgray"
        show={show}
      >
        <View
          style={{
            flexDirection: horizontalLayout ? 'row' : 'column',
            justifyContent: horizontalLayout ? 'space-between' : 'flex-start',
          }}
        >
          <Header>{label}</Header>
          <Tagline>{value}</Tagline>
        </View>
      </HeaderButton>

      {show && (
        <Content>
          {children}
        </Content>
      )}
    </Container>
  );
}

export default CollapsiblePicker;
