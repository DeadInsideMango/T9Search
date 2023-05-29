import { Text, View, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Context } from '../../Context/Context';

const ListEmptyComponent = ({ onPress }) => {

  const { state } = React.useContext(Context);

  if(state.data !== '') {
    return(
      <View style={styles.emptyTextViewStyle}>
        <Text style={styles.emptyText}>There is no results</Text>
      </View>
    );
  }

  return (
    <View style={styles.emptyTextViewStyle}>
      <Text style={styles.emptyText}>The list is currently empty</Text>
      <Button title='Add text' onPress={onPress}/>
    </View>
  );
}

export default ListEmptyComponent;