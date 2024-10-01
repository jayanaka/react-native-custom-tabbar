import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Search = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Search'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F6',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 16,
  },
});

export default Search;
