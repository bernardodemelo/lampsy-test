import type { MonitoringData } from "../types";
import { faker } from "@faker-js/faker";

const MONTH_ORDER = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
] as const;

type MonthLabel = (typeof MONTH_ORDER)[number];

export class GenericData {
	public getRandomData = (
		count: number,
		uniqueMonthsOnly = true,
	): MonitoringData => {
		const seen = new Set<MonthLabel>();

		const data = Array.from({ length: count }, () =>
			this.generateData(seen, uniqueMonthsOnly),
		);

		return data.sort(
			(a, b) =>
				MONTH_ORDER.indexOf(a.label as MonthLabel) -
				MONTH_ORDER.indexOf(b.label as MonthLabel),
		);
	};

	private generateData = (
		seen: Set<MonthLabel>,
		unique: boolean,
	): MonitoringData[number] => {
		let label: MonthLabel;

		do {
			label = faker.date.month({ abbreviated: true }) as MonthLabel;
		} while (unique && seen.has(label));

		seen.add(label);

		return {
			value: faker.number.int({ max: 500 }),
			label,
			frontColor: faker.color.human(),
		};
	};
}
