import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./src/screens/ListScreen/ListScreen";
import DetailView from "./src/screens/DetailView/DetailView";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const navigator = createStackNavigator(
  {
    AlbunsList: ListScreen,
    DetailView: DetailView,
  },
  {
    initialRouteName: "AlbunsList",
    defaultNavigationOptions: {
      title: "AlbunsList",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
