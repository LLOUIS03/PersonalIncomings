import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const SpendScreen = ({navigation}) => {
  const goToInputSpend = () => {
    navigation.navigate('SpendInput');
  };
  return (
    <View>
      <Header
        title="Gastos"
        backgroundColor="#F49F8D"
        iconName="ios-add"
        moveToScreen={goToInputSpend}
      />
      <Text>Los gastos iran aqui</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SpendScreen;
