import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { GRAY, WHITE, DARK_BLUE, BUTTON_WHITE, BLUE } from '../colors';

function Button({ name, style, onPress, secondary }) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      backgroundColor: secondary ? BLUE : BUTTON_WHITE,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: secondary ? BLUE : GRAY,
      padding: 8,
    },
    text: {
      fontSize: 16,
      color: secondary ? WHITE : DARK_BLUE,
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

export default Button;
