import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './Screens/MainScreen';
import { Context } from './Context/Context';
import { HoldMenuProvider } from 'react-native-hold-menu';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {

  const [state, setState] = React.useState({
    data: '',
    filtredData: '',
    uri: '',
  });

  const contextValue = React.useMemo(() => ({ 
    state: state,
    setState: setState,
  }));

  enableScreens();

  return (
      <Context.Provider value={contextValue}>
        <HoldMenuProvider
          iconComponent={Ionicons}
          theme={"light"}>
            <NavigationContainer>
              <MainScreen/>
            </NavigationContainer>
        </HoldMenuProvider>
      </Context.Provider>
  );
}
