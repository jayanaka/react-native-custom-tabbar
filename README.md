# react-native-custom-tabbar

https://github.com/user-attachments/assets/f2e806b2-3016-4a14-9f3d-0f79139e5510

## Requirements
- iOS 12.0+
- Xcode 12+

## Environment setup
Follow these instructions to [environment setup](https://reactnative.dev/docs/environment-setup?guide=native).

## Installation

Clone the project (HTTPS / SSH)

```bash
  git clone https://github.com/jayanaka/react-native-custom-tabbar.git
```
or
```bash
  git clone git@github.com:jayanaka/react-native-custom-tabbar.git
```

Go to the project directory

```bash
  cd react-native-custom-tabbar
```
Install packages

```bash
  npm install
```

Install iOS dependencies

Go to the iOS project directory

```bash
  cd ios
```
and run,
```bash
  pod install
```
Install android dependencies

Go back project directory

```bash
  cd //
```
Go to the android project directory

```bash
  cd android
```
and run,
```bash
  ./gradlew clean
```
## Run device
Run iOS device

```bash
  npx react-native run-ios
```
Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

Run android device

```bash
  npx react-native run-android
```
Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

## Libraries
- @react-navigation/material-top-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @react-navigation/stack
- react-native-gesture-handler
- react-native-pager-view
- react-native-safe-area-context
- react-native-screens
- react-native-svg

## Directory Structure

```
root
├── __tests__
├── android
├── ios
├── node_modules
└── src
    └── assets
    └── navigation
    └── screens
```

## Quick Overview

Quickly get an idea about each folder's role.

| Directory      | Short Description                                                        |
| :------------- | :----------------------------------------------------------------------- |
| android        | Android project. Includes modifications to integrate libraries.          |
| ios            | iOS project. Includes modifications to integrate libraries.              |
| src            | Most of the app's code is here.                                          |
| assets         | Shared images, icons, fonts etc.                                         |
| navigation     | Root and tab navigator.                                                  |
| screens        | App screens.                                                             |
