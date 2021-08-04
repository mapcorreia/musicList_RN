import React from "react";
import { createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./src/screens/ListScreen/ListScreen";
import DetailView from "./src/screens/DetailView/DetailView";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import styles from "./App.style";

const store = createStore(reducers, applyMiddleware(thunk));

const navigator = createStackNavigator(
  {
    AlbunsList: ListScreen,
    DetailView: DetailView,
  },
  {
    initialRouteName: "AlbunsList",
    defaultNavigationOptions: {
      title: "Salt Music",
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerBackTitleVisible: false,
      headerTintColor: "white",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <App />
    </Provider>
  );
};
