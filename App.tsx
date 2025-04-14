import type React from "react";
import { spacing } from "./src/theme";
import { View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import VideoScreen from "./src/screens/VideoScreen";
import NavContainer from "./src/navigators/default";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
					<NavContainer />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
