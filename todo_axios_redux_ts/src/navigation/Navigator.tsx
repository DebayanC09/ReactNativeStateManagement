import { NavigationContainer } from "@react-navigation/native";
import { StackRoute } from "./StackRoute";

const Navigator = () => {
    return (
      <NavigationContainer>
        <StackRoute />
      </NavigationContainer>
    );
  };
  
  export default Navigator;