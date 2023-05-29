import { View } from 'react-native';
import * as React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Context } from '../../Context/Context';
import { useNavigation } from '@react-navigation/native';
import { HoldItem } from 'react-native-hold-menu';

const RightButton = ({ onPress }) => {

  const { state, setState } = React.useContext(Context);
  const navigation = useNavigation();

  const MenuItems = [
    { text: 'Actions', isTitle: true, onPress: () => {} },
    { text: 'Reset list', icon: 'ios-refresh-outline', onPress: () => { 
      onPress() 
    }},
    { text: 'About page', icon: 'ios-information-circle-outline', withSeparator: true, onPress: () => { 
      navigation.navigate('Info'); 
    }},
    { text: 'Clear list', icon: 'ios-trash-outline', isDestructive: true, onPress: () => { 
      setState({
        ...state,
        data: '',
        filtredData: '',
        uri: '',
      });
     }},
  ];

  return (
    <View
      style={styles.container}> 
        <HoldItem 
          items={MenuItems}
          activateOn={'tap'}
          hapticFeedback={'None'}
          bottom={false}
          closeOnTap={true}
          disableMove={true}
          >
            <Ionicons name="ios-list-outline" size={30} color="#007AFF"/>
        </HoldItem>
    </View>
    
  );
}

export default RightButton;

