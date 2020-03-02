import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {COLOR_HEADER_INCOMING, ICON_ARROW_BACK} from '../const/const';
import Header from '../components/Header';
import Input from '../components/TextInput';

const SaveIncomingScreen = ({navigation}) => {
  const goToIncoming = () => {
    navigation.navigate('Incoming');
  };

  const onChange = (name, value) => {
    console.log('name', name, 'value', value);
  };

  return (
    <View>
      <Header
        title="Inclusion de los ingresos"
        backgroundColor={COLOR_HEADER_INCOMING}
        iconName={ICON_ARROW_BACK}
        moveToScreen={goToIncoming}
      />
      <ScrollView>
        <KeyboardAvoidingView>
          <Input
            name="Incomings"
            placeholder="Enter Incomings"
            onChangeText={onChange}
            maxLength={10}
            keyboardType="numeric"
            value={user}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({});

export default SaveIncomingScreen;
