import { useRef, useCallback } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import VideoPlayer, { type VideoPlayerRef } from "react-native-video-player";
import { typography, spacing } from "../theme";
import appContent from "../locales/en.json";

const VideoScreen = () => {
  const playerRef = useRef<VideoPlayerRef>(null);
  const progress = useRef(0);

  const handleProgress = useCallback(({ currentTime }: { currentTime: number }) => {
    progress.current = currentTime;
  }, []);

  const handleError = useCallback((error: unknown) => {
    console.error("Video error:", error);
  }, []);

  return (
    <View
      style={{
        marginVertical: spacing.xxl,
        paddingHorizontal: spacing.md,
        flex: 1,
      }}
    >
      {/* Heading */}
      <View style={{ marginBottom: spacing.xl }}>
        <Text
          style={{
            fontSize: typography.fontSizes.extraLarge,
            marginBottom: spacing.md,
          }}
        >
          {appContent.heading_video}
        </Text>
        <Text
          style={{
            fontSize: typography.fontSizes.medium,
            fontWeight: typography.fontWeights.light,
          }}
        >
          {appContent.paragraph_video}
        </Text>
      </View>

      {/* Video Player */}
      <VideoPlayer
        endWithThumbnail
        thumbnail={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        }}
        source={{
          uri: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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

export default VideoScreen;
