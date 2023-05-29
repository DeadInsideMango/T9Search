import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const LargeText = ({ displayText, type }) => {

    const [headerType, setHeaderType] = React.useState([styles.headerTextStyle]);

    React.useEffect(() => {
        switch (type) {
            case 'subheader': {
                setHeaderType([...headerType, { fontSize: 25 }])
                break;
            }
            case 'header': {
              setHeaderType([...headerType, { fontSize: 30 }])
              break;
            }
            default: {
              setHeaderType([...headerType, { fontSize: 25 }])
              break;
            }
        } 
    }, []);

  return (
    <View style={styles.headerViewStyle}>
      <Text style={headerType}>{displayText}</Text>
    </View>
  )
}

export default LargeText;