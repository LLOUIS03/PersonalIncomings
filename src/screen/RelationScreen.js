import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_HEADER_RELATION, ICON_ADD} from '../const/const';
import Header from '../components/Header';

const RelationScreen = () => {
  return (
    <View>
      <Header
        title="Relation"
        backgroundColor={COLOR_HEADER_RELATION}
        iconName={ICON_ADD}
      />
      <Text>Los Ingresoss iran aqui</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default RelationScreen;
