import { BarChart } from "react-native-gifted-charts";
import { View } from "react-native";
import { useMemo } from "react";

import SubHeading from "../components/atoms/SubHeading";
import Heading from "../components/atoms/Heading";
import { GenericData } from "../utils/data";
import appContent from "../locales/en.json";
import { spacing } from "../theme";

export default function HomeScreen() {
	const chartData = useMemo(() => {
		const generator = new GenericData();
		return generator.getRandomData(5);
	}, []);

	return (
		<View testID="home-screen">
			<View testID="home-header" style={{ marginBottom: spacing.xl }}>
				<Heading>{appContent.heading_home}</Heading>
				<SubHeading>{appContent.paragraph_home}</SubHeading>
			</View>
			<View testID="home-chart">
				<SubHeading>{appContent.heading_section_home}</SubHeading>
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
}

