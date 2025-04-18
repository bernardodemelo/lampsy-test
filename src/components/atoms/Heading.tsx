import type { TextProps } from "react-native";
import { Text } from "react-native";

import { typography } from "../../theme";

type HeadingProps = TextProps & {
	children: React.ReactNode;
};

const Heading = ({ children, style, ...rest }: HeadingProps) => {
	return (
		<Text
			style={[
				{
					fontSize: typography.fontSizes.extraLarge,
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

export default Heading;
