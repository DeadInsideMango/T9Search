import { View, StatusBar } from 'react-native';
import React from 'react';
import { Context } from '../../Context/Context';
import Item from './Item';
import ListEmptyComponent from './ListEmptyComponent';
import ListHeaderComponent from './ListHeaderComponent';
import { FlashList } from "@shopify/flash-list";

const List = ({ onPress }) => {

    const { state } = React.useContext(Context);

    const itemTorender = ({ item }) => (
      <Item str={item}/>
    );

  return (
    <View 
      style={{ marginTop:  StatusBar.currentHeight || 0, height: '100%', margin: 20}}
      >
        <FlashList
            data={state.data}
            horizontal={false}
            initialNumToRender={100}
            renderItem={itemTorender}
            ListEmptyComponent={<ListEmptyComponent onPress={onPress}/>}
            contentInsetAdjustmentBehavior={'automatic'}
            ListHeaderComponent={<ListHeaderComponent/>}
            automaticallyAdjustContentInsets={false}
            estimatedItemSize={200}
        />
    </View>
  );
}

export default List;