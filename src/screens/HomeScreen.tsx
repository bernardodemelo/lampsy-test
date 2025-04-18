import { BarChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import { spacing, typography } from "../theme";
import { GenericData } from "../utils/data";
import appContent from "../locales/en.json";
import { useMemo } from "react";

const HomeScreen = () => {
  const chartData = useMemo(() => {
    const generator = new GenericData();
    return generator.getRandomData(5);
  }, []);

  return (
    <View
      style={{
        marginVertical: spacing.xxl,
        paddingHorizontal: spacing.md,
        flex: 1,
      }}
    >
      <View style={{ marginBottom: spacing.xl }}>
        <Text style={{ fontSize: typography.fontSizes.extraLarge }}>
          {appContent.heading_home}
        </Text>
        <Text
          style={{
            fontSize: typography.fontSizes.large,
            fontWeight: typography.fontWeights.light,
          }}
        >
          {appContent.paragraph_home}
        </Text>
      </View>

      {/* Chart Section */}
      <View>
        <Text
          style={{
            fontSize: typography.fontSizes.large,
            fontWeight: typography.fontWeights.light,
            marginBottom: spacing.lg,
          }}
        >
          {appContent.heading_section_home}
        </Text>
        <BarChart
          showYAxisIndices
          noOfSections={4}
          maxValue={600}
          data={chartData}
          isAnimated
        />
      </View>
    </View>
  );
};

export default HomeScreen;
