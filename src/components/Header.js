import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = props => {
  const {title, backgroundColor, moveToScreen, iconName} = props;
  const style = styles(backgroundColor);
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <TouchableHighlight
        style={style.touchableHighlight}
        onPress={moveToScreen}>
        <View style={style.button}>
          <Ionicons name={iconName} style={style.icon} size={25} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = backgroundColor => {
  return StyleSheet.create({
    container: {
      backgroundColor,
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    title: {
      alignSelf: 'flex-start',
      flex: 1,
      fontSize: 25,
    },
    touchableHighlight: {
      display: 'flex',
    },
    button: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      flex: 1,
      height: 20,
      width: 20,
      justifyContent: 'center',
      backgroundColor: '#4fafaf',
      borderWidth: 1,
      borderColor: '#4fafaf',
    },
    icon: {
      color: 'black',
    },
  });
};

export default Header;
