import type { ViewStyle, TextStyle } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import React from "react";

import { spacing } from "../../theme";

type ButtonProps = {
	title: string;
	onPress: () => void;
	backgroundColor?: string;
	textColor?: string;
	style?: ViewStyle;
	textStyle?: TextStyle;
};

const Button = ({
	title,
	onPress,
	backgroundColor = "#0070f3",
	textColor = "#fff",
	style,
	textStyle,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{
					backgroundColor,
					padding: spacing.md,
					borderRadius: 10,
					alignItems: "center",
				},
				style,
			]}
		>
			<Text
				style={[
					{ color: textColor, fontWeight: "600", fontSize: 16 },
					textStyle,
				]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
