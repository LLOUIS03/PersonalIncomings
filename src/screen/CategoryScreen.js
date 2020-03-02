import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';

const CategoryScreen = () => {
  return (
    <View>
      <Header
        title="Seleccione la categoria"
        backgroundColor={COLOR_HEADER_INCOMING}
        iconName={ICON_ARROW_BACK}
        moveToScreen={goToIncoming}
      />
      <Text>Select the category</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CategoryScreen;
