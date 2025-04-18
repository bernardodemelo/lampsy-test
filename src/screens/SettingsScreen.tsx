import React, { useState } from "react";
import { View } from "react-native";

import ConfirmModal from "../components/molecules/ConfirmModal";
import SettingRow from "../components/molecules/SettingsRow";
import Button from "../components/atoms/Button";
import appContent from "../locales/en.json";
import { spacing } from "../theme";

export default function SettingsScreen() {
	/* Settings Random States */
	const [notifications, setNotifications] = useState(true);
	const [locationServices, setLocationServices] = useState(true);
	const [autoUpdate, setAutoUpdate] = useState(true);
	const [dataSync, setDataSync] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	function resetStates() {
		setNotifications(true);
		setLocationServices(true);
		setAutoUpdate(true);
		setDataSync(false);
		setModalVisible(false);
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={{ marginBottom: spacing.lg }}>
				<SettingRow
					label={appContent.notifications_settings}
					value={notifications}
					onToggle={setNotifications}
				/>

				<SettingRow
					label={appContent.location_settings}
					value={locationServices}
					onToggle={setLocationServices}
				/>

				<SettingRow
					label={appContent.auto_update_settings}
					value={autoUpdate}
					onToggle={setAutoUpdate}
				/>

				<SettingRow label={appContent.data_sync_settings} value={dataSync} onToggle={setDataSync} />

				<Button
					title={appContent.reset_settings_heading}
					onPress={() => setModalVisible(true)}
					backgroundColor="#ff3b30"
					style={{ marginTop: spacing.lg }}
				/>

				<ConfirmModal
					visible={modalVisible}
					title={appContent.reset_settings_heading}
					message={appContent.reset_settings_paragraph}
					onCancel={() => setModalVisible(false)}
					onConfirm={() => {
						resetStates();
					}}
				/>
			</View>
		</View>
	);
}
