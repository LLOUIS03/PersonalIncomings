import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_HEADER_SPENDING, ICON_ARROW_BACK} from '../const/const';
import Header from '../components/Header';

const SaveSpendScreen = ({navigation}) => {
  const goToSpend = () => {
    navigation.navigate('Spend');
  };
  return (
    <View>
      <Header
        title="Inclusion de Gastos"
        backgroundColor={COLOR_HEADER_SPENDING}
        iconName={ICON_ARROW_BACK}
        moveToScreen={goToSpend}
      />
      <Text>Los Save spend van aqui</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SaveSpendScreen;
