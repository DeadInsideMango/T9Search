import * as React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import { Context } from '../../Context/Context';
import RightButton from '../RightButton/RightButton';
import { StatusBar } from 'expo-status-bar';
import List from './List';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { formatString } from '../../util/StringFormatting';

const Home = ({ navigation }) => {

    const { state, setState } = React.useContext(Context);
    const [index, setIndex] = React.useState(0);
    const [buffer, setBuffer] = React.useState(new Array());

    const handleDocumentPicker = async () => {
        await DocumentPicker.getDocumentAsync()
        .then(res => {
          switch (res.type) {
            case 'cancel':
              break;
            case 'success': handleDocumentUri(res.uri);
            default: 
              break;
          }
        })
        .catch(err => console.error(err.message));
    };

    const handleDocumentUri = async (uri) => {
        await FileSystem.readAsStringAsync(uri)
        .then(text => {
          let res = formatString(text);
          setState({
            ...state,
            data: res,
            filtredData: res,
            uri: uri
          });
          setBuffer([...res]);
        })
        .catch(err => Alert.alert(
          'Ups ... something went wrong',
          'Please read about problems and acceptable file formats on About page',
          [
            {
              text: 'About page',
              onPress: () => navigation.navigate('Info'),
              style: 'default'
            },

            {
              text: 'Cancel',
              style: 'destructive',
            },
          ]
        ));
    };

    React.useEffect(() => {
      switch(index) {
        case 0: {
          setState({ 
            ...state,
            data: state?.filtredData
           });
          break;
        }
        case 1: {
          if(state?.data) {
            setState({ 
              ...state,
              data: buffer.sort(),
             });
          } 
          break;
        }
        case 2: {
          if (state?.data) {
            setState({ 
              ...state,
              data: buffer.sort().reverse(),
             });
          } 
          break;
        }
        default: {
          break;
        }
      }
    }, [index]);

    const changeIndex = React.useCallback((index) => {
      setIndex(index);
    }, []); 

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: () => {
              return (
                <SegmentedControl
                  style={{ width: 200, alignSelf: 'center' }}
                  values={['All', 'A-Z', 'Z-A']}
                  appearance={'light'}
                  selectedIndex={index}
                  onChange={event => changeIndex(event.nativeEvent.selectedSegmentIndex)}
              />
              );
            },
            headerRight: () => <RightButton onPress={handleDocumentPicker}/>,
            headerLargeTitle: true,
            headerLargeTitleShadowVisible: false,
            headerShadowVisible: true,
            title: 'T9 search',
        })
    }, [navigation]);

  return (
    <SafeAreaView style={styles.homeScreenView}>
      <StatusBar style='dark'/>
      <List onPress={handleDocumentPicker}/>
    </SafeAreaView>
  );
}

export default Home;