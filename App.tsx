import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import type React from "react";

import NavContainer from "./src/providers/Navigator.tsx";

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
					<NavContainer/>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
