import type { MonitoringData } from "../types";
import { faker } from "@faker-js/faker";

const MONTH_ORDER = [
	"Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

type MonthLabel = (typeof MONTH_ORDER)[number];

/**
 * Utility class to generate mock monitoring data.
 */
export class GenericData {
	/**
	 * Generates random monitoring data with month labels and values.
	 *
	 * @param count - The number of data entries to generate.
	 * @param uniqueMonthsOnly - If true, ensures each entry has a unique month label.
	 * @returns An array of monitoring data sorted by calendar month.
	 */
	public getRandomData = (
		count: number,
		uniqueMonthsOnly = true,
	): MonitoringData => {
		const seen = new Set<MonthLabel>();

		const data = Array.from({ length: count }, () =>
			this.generateData(seen, uniqueMonthsOnly),
		);

		// Sort the data chronologically by month
		return data.sort(
			(a, b) =>
				MONTH_ORDER.indexOf(a.label as MonthLabel) -
				MONTH_ORDER.indexOf(b.label as MonthLabel),
		);
	};

	/**
	 * Generates a single data point for monitoring purposes.
	 *
	 * @param months - A Set used to track which months have been generated already.
	 * @param unique - If true, ensures the returned month label hasn't been used before.
	 * @returns A single monitoring data entry with a random value, label (month), and color.
	 */
	private generateData = (
		months: Set<MonthLabel>,
		unique: boolean,
	): MonitoringData[number] => {
		let label: MonthLabel;

		// Keep generating a new month label if uniqueness is required
		do {
			label = faker.date.month({ abbreviated: true }) as MonthLabel;
		} while (unique && months.has(label));

		months.add(label);

		return {
			value: faker.number.int({ max: 500 }),
			label,
			frontColor: faker.color.human(),
		};
	};
}
