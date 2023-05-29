import { View, TextInput, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';
import { letterCombination } from '../../util/T9';
import { Trie } from '../../util/Trie';
import { Context } from '../../Context/Context';

const ListHeaderComponent = () => {

  const { state, setState } = React.useContext(Context);
  const [query, setQuery] = React.useState(null);

  const setUpTrie = React.useMemo(() => {
    const tr = new Trie();
    for (let i = 0; i < state?.data.length; i++) {
      tr.insert(state?.data[i]);
    }
    return tr;
  }, [state]);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      search(query);
    }, 200);
    return () => clearTimeout(delay);
  }, [query]);
  
  const search = (text) => {
    if (text) {
      let res = [];

      let suggestions = letterCombination(text);

      let tr = setUpTrie;

      for (let i = 0; i < suggestions.length; i++) {
        res.push(tr.suggest(suggestions[i]));
      }

      res = res.reduce((a, b) => {
        return a.concat(b);
      }, []);

      setState({
        ...state,
        data: res,
      });

    } else {
      setState({
        ...state,
        data: state.filtredData,
      });
    }
  }

  return(
    <SafeAreaView 
      style={styles.headerInputViewStyle}>
       <View 
        style={styles.headerInputStyle}>
        <TextInput
          autoCorrect={false}
          clearButtonMode={'always'}
          inputMode={'tel'}
          keyboardAppearance={'light'}
          multiline={false}
          placeholder={'Search'}
          placeholderTextColor={'#636366'}
          textAlign={'left'}
          onChangeText={text => setQuery(text)}
        />
      </View>     
    </SafeAreaView>
  );
}

export default ListHeaderComponent;