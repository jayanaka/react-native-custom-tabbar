import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DashboardTabNavigation from '../navigation/DashboardTabNavigation';

const Dashboard = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const topSafeAreaSpace = insets.top;

  return (
    <View style={[styles.container, {paddingTop: topSafeAreaSpace}]}>
      <DashboardTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F6',
    justifyContent: 'center',
  },
});

export default Dashboard;
