import { View, Text, Switch } from 'react-native';
import React from 'react';

import { spacing } from '../../theme';

type SettingRowProps = {
  label: string;
  value: boolean;
  onToggle: (value: boolean) => void;
};

export default function SettingRow ({ label, value, onToggle }: SettingRowProps){
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      }}
    >
      <Text style={{ fontSize: 16, color: '#333' }}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};
