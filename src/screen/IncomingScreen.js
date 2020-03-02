import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_HEADER_INCOMING, ICON_ADD} from '../const/const';
import Header from '../components/Header';

const IncomingScreen = ({navigation}) => {
  const goToInputIncoming = () => {
    navigation.navigate('IncomingInput');
  };
  return (
    <View>
      <Header
        title="Ingresos"
        backgroundColor={COLOR_HEADER_INCOMING}
        iconName={ICON_ADD}
        moveToScreen={goToInputIncoming}
      />
      <Text>Los Ingresoss iran aqui</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default IncomingScreen;
