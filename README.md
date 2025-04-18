# Lampsy Test App

A React Native application for presenting live video streams with a scalable, production-ready architecture.

---

## 🚀 Quick Start

### 1. Clone and Install Dependencies

`git clone <this-repo-url>
cd lampsy-test
yarn install`

### 2. iOS Setup
`cd ios
pod install
cd ..
yarn run start
yarn run ios`

### 3. Android Setup

**Important:**  
You must create your own `android/local.properties` file with the path to your Android SDK.  
Example content for `local.properties`:
`sdk.dir=/Users/<your-username>/Library/Android/sdk`

Then run:
`yarn run start
yarn run android`

--
## 🧑‍💻 What I'd Do With More Time

### 🏗️ Scalable Live Streaming Architecture

- **Frontend:**  
  The React Native app would consume HLS live streams and display them using a robust video player.

- **Backend:**
  - **Ingest:** Accept live video sources (RTMP/WebRTC) and transcode them to HLS using AWS MediaLive or FFmpeg.
  - **Storage:** Store HLS segments and manifests in AWS S3 for durability and scalability.
  - **Delivery:** Use AWS CloudFront as a CDN to serve video content globally with low latency -> optional if should be only available in Portugal. 
  - **Security:** Restrict access to video content using signed URLs and proper IAM policies.

### 🌍 Internationalization (i18n)

- Integrate an i18n solution (like `react-i18next`) to support multiple languages.
- Externalize all user-facing strings and provide translation files for each supported language.
- Add a language switcher and automatic locale detection.

### 📊 Observability and Monitoring

- Integrate application-level metrics and logs, exporting them to **Prometheus**.
- Set up **Grafana** dashboards for:
  - Real-time monitoring of stream health, errors, and user engagement.
  - Alerting on key metrics (e.g., stream downtime, high error rates).
- Monitor AWS services and CDN performance.

### 🧪 Enhanced Integration Testing

- Implement end-to-end and integration tests using **Detox** for both iOS and Android.
- Automate test runs in CI/CD pipelines.
- Cover critical flows: stream playback, error handling, language switching, and navigation.

### 📦 Deployment to App Stores

- Prepare production builds for iOS and Android.
- Follow [React Native's official guide for App Store deployment][1]:
  - Configure release schemes and build for production.
  - Archive and submit to Apple App Store using Xcode.
  - Prepare and upload to Google Play Store using Android Studio.
- Automate deployment steps where possible.

---

## 📚 References

- [React Native: Publishing to App Store][1]
- [Grafana Documentation](https://grafana.com/docs/)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Detox Testing](https://wix.github.io/Detox/docs/introduction/getting-started/)

[1]: https://reactnative.dev/docs/publishing-to-app-store
