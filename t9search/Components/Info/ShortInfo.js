import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const ShortInfo = ({ shortInfo }) => {
  return (
    <View style={styles.shortInfoViewStyle}>
      <Text 
        style={styles.shortInfoTextStyle}
        adjustsFontSizeToFit={true}
      >
        {shortInfo}</Text>
    </View>
  )
}

export default ShortInfo;