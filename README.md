# Lumani TV

Android TV / Google TV client for AI chats. Pair the TV with the Lumani mobile app using a QR code, then chat through an OpenAI-compatible or Anthropic API endpoint. Profiles and chat history are stored securely on the device.

## APKs

- **[Lumani-TV-release.apk](apk/Lumani-TV-release.apk)** — signed release build for installation on Android TV / Google TV.
- **[Lumani-Phone-release.apk](apk/Lumani-Phone-release.apk)** — release build of the Lumani mobile companion app.

Package: `com.lumani.tv`  
Version: `1.0` (`versionCode 1`)  
Minimum Android: `8.0` / API 26

## Installation

Download the TV APK and install it on the TV from USB or with ADB:

```bash
adb install Lumani-TV-release.apk
```

The application requires network access and a Lumani mobile app profile with an API endpoint, model, and API key.


## Website

Open the landing page: [wincatik.github.io/lumani-tv](https://wincatik.github.io/lumani-tv/)
