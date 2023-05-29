import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Item = ({ str }) => {
  return (
    <View style={styles.itemView}>
        <Text style={styles.itemText}>{str}</Text>
    </View>
  )
}

export default Item;