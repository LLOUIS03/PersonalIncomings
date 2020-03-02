import React from 'react';
import {View, TextInput} from 'react-native';

const Input = props => {
  const {
    name,
    onChangeText,
    placeholder,
    keyboardType,
    returnKeyType,
    numberOfLines,
    multiline,
    onSubmitEditing,
    style,
    value,
  } = props;

  const onChange = value => {
    onChangeText(name, value);
  };

  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
      }}>
      <TextInput
        name={name}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor="#007FFF"
        keyboardType={keyboardType}
        onChangeText={onChange}
        returnKeyType={returnKeyType}
        numberOfLines={numberOfLines}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing}
        style={style}
        blurOnSubmit={false}
        value={value}
      />
    </View>
  );
};

export default Input;
