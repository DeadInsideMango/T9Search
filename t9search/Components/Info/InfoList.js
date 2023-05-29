import { View, FlatList } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { aboutApp } from '../../util/InfoData';
import InfoListItem from './InfoListItem';

const InfoList = ({ data, separator}) => {

  const ListItem = ({ item }) => {
    return(
      <InfoListItem item={item} separator={separator}/>
    );
  };

  return (
    <View style={styles.infoListiewStyle}>
      <FlatList
        data={data}
        renderItem={ListItem}
        scrollEnabled={false}
      />
    </View>
  )
}

export default InfoList;