import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Section = ({ children }) => {
  return (
    <View style={styles.sectionViewStyle}>
        {children}
    </View>
  )
}

export default Section;