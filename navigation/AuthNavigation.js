import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AuthHome from "../screens/Auth/AuthHome";
import BeforeSign from "../screens/Auth/BeforeSign";
import AuthSignIn from "../screens/Auth/AuthSignIn";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    BeforeSign,
    AuthSignIn
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigation);
