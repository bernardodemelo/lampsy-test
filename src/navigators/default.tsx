import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings, Video } from "lucide-react-native";

// Screen components
import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";

const Tab = createBottomTabNavigator();

export default function NavContainer() {
	return (
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: "#0070f3",
					tabBarInactiveTintColor: "gray",
					tabBarStyle: {
						paddingBottom: 5,
						paddingTop: 5,
						height: 60,
					},
                    headerShown: false
				}}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
					}}
				/>
				<Tab.Screen
					name="Video"
					component={VideoScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Video color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
	);
}
