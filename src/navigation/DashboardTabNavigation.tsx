/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import {
  IconCart,
  IconHome,
  IconProfile,
  IconSearch,
} from "../assets/SVGIcons";

const Tab = createMaterialTopTabNavigator();

const DashboardTabNavigation = () => {
  const insets = useSafeAreaInsets();
  const bottomSafeAreaSpace = insets.bottom;
  const tabItemBottomPadding = bottomSafeAreaSpace;

  const { width } = Dimensions.get("window");

  const tabBarWidth = width - 48;
  const tabBarHeight = 67;
  const tabBarBottomMargin =
    tabItemBottomPadding > 0 ? tabItemBottomPadding : 21;
  const tabWidth = tabBarWidth / 4;

  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarIndicatorStyle: {
            height: tabBarHeight - 12,
            width: tabWidth - 12,
            backgroundColor: "#007AFF",
            marginBottom: 6,
            marginLeft: 6,
            borderRadius: 40,
          },
          tabBarIndicatorContainerStyle: {
            height: tabBarHeight,
          },
          tabBarStyle: {
            width: tabBarWidth,
            height: tabBarHeight,
            marginLeft: 24,
            borderRadius: 40,
            position: "absolute",
            bottom: tabBarBottomMargin,
            shadowOffset: { width: 0, height: 4 },
            shadowColor: "gray",
            shadowOpacity: 0.4,
            shadowRadius: 4,
          },
          tabBarPressColor: "transparent",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    styles.tabBarItemText,
                    {
                      color: focused ? "#FFFFFF" : "#007AFF",
                    },
                  ]}
                >
                  {"Home"}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <IconHome
                  width={22}
                  height={22}
                  fill={focused ? "#FFFFFF" : "#007AFF"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    styles.tabBarItemText,
                    {
                      color: focused ? "#FFFFFF" : "#007AFF",
                    },
                  ]}
                >
                  {"Search"}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <IconSearch
                  width={22}
                  height={22}
                  fill={focused ? "#FFFFFF" : "#007AFF"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    styles.tabBarItemText,
                    {
                      color: focused ? "#FFFFFF" : "#007AFF",
                    },
                  ]}
                >
                  {"Cart"}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <IconCart
                  width={22}
                  height={22}
                  fill={focused ? "#FFFFFF" : "#007AFF"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    styles.tabBarItemText,
                    {
                      color: focused ? "#FFFFFF" : "#007AFF",
                    },
                  ]}
                >
                  {"Profile"}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <IconProfile
                  width={22}
                  height={22}
                  stroke={focused ? "#FFFFFF" : "#007AFF"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
  },
  tabBarItemText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default DashboardTabNavigation;
