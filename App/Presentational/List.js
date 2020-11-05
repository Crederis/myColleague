import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
  image: {
    height: 30,
    width: 30,
  },
});

const List = ({ image, name, age, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress()}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{age}</Text>
    </TouchableOpacity>
  );
};

export default List;
