import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

const HeaderTitle = ({ length }) => {
  return (
    <View style={styles.headerMainTextStyle}>
        <Text style={styles.largeHeaderTextStyle}>List lenght: </Text>
        <Text style={styles.smallHeaderTextStyle}>{length}</Text>
    </View>
  );
}

export default HeaderTitle;