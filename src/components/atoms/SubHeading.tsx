import type { TextProps } from "react-native";
import type { TextStyle } from "react-native";
import { Text } from "react-native";

import { typography } from "../../theme";

type SubHeadingProps = TextProps & {
	children: React.ReactNode;
};

const SubHeading = ({ children, style, ...rest }: SubHeadingProps) => {
	return (
		<Text
			style={[
				{
					fontSize: typography.fontSizes.large,
					fontWeight: typography.fontWeights.light as TextStyle["fontWeight"],
					marginBottom: 8,
				},
				style,
			]}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default SubHeading;
