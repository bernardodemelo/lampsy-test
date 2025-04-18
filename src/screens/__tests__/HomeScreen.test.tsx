import { render, within } from '@testing-library/react-native';
import type React from 'react';

import HomeScreen from '../../screens/HomeScreen';

jest.mock('react-native-gifted-charts', () => ({
  BarChart: () => {
    const { View } = require('react-native');
    return <View testID="mocked-bar-chart" />;
  },
}));


jest.mock('../../components/atoms/Heading', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => {
    const { View, Text } = require('react-native');
    return (
      <View>
        <Text>{children}</Text>
      </View>
    );
  },
}));


jest.mock('../../components/atoms/SubHeading', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => {
    const { View, Text } = require('react-native');
    return (
      <View>
        <Text>{children}</Text>
      </View>
    );
  },
}));


jest.mock('../../utils/data', () => ({
  GenericData: jest.fn().mockImplementation(() => ({
    getRandomData: () => [{ value: 100 }, { value: 200 }],
  })),
}));


jest.mock('../../locales/en.json', () => ({
  heading_home: 'Welcome Home',
  paragraph_home: 'Here is your dashboard',
  heading_section_home: 'Data Overview',
}));

describe('HomeScreen', () => {
  it('renders header and chart sections correctly', () => {
    const { getByTestId } = render(<HomeScreen />);

    const header = getByTestId('home-header');
    const chart = getByTestId('home-chart');

    expect(within(header).queryByText('Welcome Home')).not.toBeNull();
    expect(within(header).queryByText('Here is your dashboard')).not.toBeNull();
    expect(within(chart).queryByText('Data Overview')).not.toBeNull();
    expect(getByTestId('mocked-bar-chart')).toBeTruthy();
  });
});
