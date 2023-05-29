import { SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import LargeText from './LargeText';
import Section from './Section';
import ShortInfo from './ShortInfo';
import { aboutApp, appFormats } from '../../util/InfoData';
import InfoList from './InfoList';

const Info = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'About page',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Section>
        <LargeText displayText={aboutApp?.title} type={'header'}/>
        <ShortInfo shortInfo={aboutApp?.shortInfo}/>
        <InfoList data={aboutApp?.data} separator={'dot'}/>
        <ShortInfo shortInfo={appFormats?.shortInfo}/>
        <InfoList data={appFormats?.data} separator={'dot'}/>
      </Section>
    </SafeAreaView>
  );
}

export default Info;