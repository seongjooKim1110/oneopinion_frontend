import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Category/Home";
import Culture from "../screens/Category/Culture";
import Politics from "../screens/Category/Politics";
import Study from "../screens/Category/Study";
import Talent from "../screens/Category/Talent";
import SideMenu from "../components/SideMenu";
import Mypage from "../screens/Mypage/Mypage";
import Survey from "../screens/Survey";
import PointShop from "../screens/PointShop";
import Icons from "../components/Icon";

const NavFactory = initialRoute =>
  createBottomTabNavigator(
    {
      initialRoute: {
        screen: initialRoute,
        navigationOptions: {
          tabBarIcon: ({ focused }) => <Icons name="home" focused={focused} />
        }
      },
      Mypage: {
        screen: Mypage,
        navigationOptions: {
          tabBarIcon: ({ focused }) => <Icons name="person" focused={focused} />
        }
      },
      Survey: {
        screen: Survey,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icons name="add-circle" focused={focused} />
          )
        }
      },
      PointShop: {
        screen: PointShop,
        navigationOptions: {
          tabBarIcon: ({ focused }) => <Icons name="cash" focused={focused} />
        }
      }
    },
    {
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: "#C4C4C4"
        }
      }
    }
  );

const DrawNavigation = createDrawerNavigator(
  {
    Home: {
      screen: NavFactory(Home)
    },
    Politics: {
      screen: NavFactory(Politics)
    },
    Talent: {
      screen: NavFactory(Talent)
    },
    Study: {
      screen: NavFactory(Study)
    },
    Culture: {
      screen: NavFactory(Culture)
    }
  },
  {
    contentComponent: props => SideMenu(props)
  }
);

export default AppContainer = createAppContainer(DrawNavigation);
