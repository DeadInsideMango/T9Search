import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const InfoListItem = ({ item, separator }) => {

    const [separatorType, setSeparatorType] = React.useState(null);

    React.useEffect(() => {
        switch(separator) {
            case 'dot': {
                setSeparatorType('•');
                break;
            }
            case 'dash': {
                setSeparatorType('-')
                break;
            }
            default: {
                setSeparatorType('•');
                break;
            }
        }
    }, []);

  return (
    <View style={styles.infoItemViewStyle}>
        <View style={styles.infoItemSeparatorViewStyle}>
            <Text style={{ fontSize: 20, fontWeight: '800' }}>{separatorType}</Text>
        </View>
        <View>
            <Text style={{ fontSize: 20, maxWidth: '100%' }}>{item}</Text>
        </View>
    </View>
  )
}

export default InfoListItem;