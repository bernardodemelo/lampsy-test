import { Text } from "react-native";
import type {TextProps} from "react-native";
import { typography } from "../theme";

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
          fontWeight: typography.fontWeights.bold,
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
