import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ComponentType, PropsWithChildren } from "react";
import { Home, Video, Settings } from "lucide-react-native";

import SettingsScreen from "../screens/SettingsScreen";
import VideoScreen from "../screens/VideoScreen";
import HomeScreen from "../screens/HomeScreen";
import LayoutProvider from "./Layout";

export default function NavContainer() {
	const Tab = createBottomTabNavigator();

	function withLayout<P extends object>(Component: ComponentType<P>) {
		return function WrappedComponent(props: PropsWithChildren<P>) {
			return (
				<LayoutProvider>
					<Component {...props} />
				</LayoutProvider>
			);
		};
	}

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#0070f3",
				tabBarInactiveTintColor: "gray",
				tabBarStyle: {
					paddingBottom: 5,
					paddingTop: 5,
					height: 70,
				},
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={withLayout(HomeScreen)}
				options={{
					tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="Video"
				component={withLayout(VideoScreen)}
				options={{
					tabBarIcon: ({ color, size }) => <Video color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={withLayout(SettingsScreen)}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Settings color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
