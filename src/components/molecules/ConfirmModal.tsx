import { Modal, View, Text } from "react-native";
import React from "react";

import appContent from "../../locales/en.json";
import SubHeading from "../atoms/SubHeading";
import { spacing } from "../../theme";
import Button from "../atoms/Button";

type ConfirmModalProps = {
	visible: boolean;
	title: string;
	message: string;
	onCancel: () => void;
	onConfirm: () => void;
};

export default function ConfirmModal ({
	visible,
	title,
	message,
	onCancel,
	onConfirm,
}: ConfirmModalProps) {
	return (
		<Modal
			animationType="fade"
			transparent
			visible={visible}
			onRequestClose={onCancel}
		>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(0,0,0,0.5)",
				}}
			>
				<View
					style={{
						backgroundColor: "#fff",
						borderRadius: 12,
						padding: spacing.lg,
						width: "80%",
					}}
				>
					<View style={{ marginBottom: spacing.md }}>
						<SubHeading>{title}</SubHeading>
						<Text>{message}</Text>
					</View>
					<View style={{ flexDirection: "row", gap: spacing.sm }}>
						<Button
							title={appContent.button_cancel}
							onPress={onCancel}
							backgroundColor="#e0e0e0"
							textColor="#333"
							style={{ flex: 1 }}
						/>
						<Button
							title={appContent.button_reset}
							onPress={onConfirm}
							backgroundColor="#ff3b30"
							style={{ flex: 1 }}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};
