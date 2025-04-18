import VideoPlayer, { type VideoPlayerRef } from "react-native-video-player";
import { ActivityIndicator, Text, View } from "react-native";
import type { OnVideoErrorData } from "react-native-video";
import { useCallback, useRef } from "react";

import Heading from "../components/atoms/Heading";
import config from "../config/default.json";
import appContent from "../locales/en.json";
import { spacing } from "../theme";

export default function VideoScreen() {
	const playerRef = useRef<VideoPlayerRef>(null);
	const progress = useRef(0);

	const handleProgress = useCallback(
		({ currentTime }: { currentTime: number }) => {
			progress.current = currentTime;
		},
		[],
	);

	const handleError = useCallback((error: OnVideoErrorData) => {
		// TODO: should have an errorBoundary that caughts the errors and displays a modal, if it affects the UX
		console.error("Video error:", error);
	}, []);

	return (
		<View>
			{/* Heading */}
			<View style={{ marginBottom: spacing.xl }}>
				<Heading>{appContent.heading_video}</Heading>
				<Text>{appContent.paragraph_video}</Text>
			</View>

			{/* Video Player */}
			<VideoPlayer
				endWithThumbnail
				thumbnail={{
					uri: config.video_thumbnail_uri
				}}
				source={{
					uri: config.video_uri
				}}
				renderLoader={() => (
					<View
						style={{
							flex: 1,
							backgroundColor: "black",
							justifyContent: "center",
						}}
					>
						<ActivityIndicator size="large" />
					</View>
				)}
				controlsTimeout={2000}
				onProgress={handleProgress}
				onError={handleError}
				showDuration
				ref={playerRef}
			/>
		</View>
	);
};
