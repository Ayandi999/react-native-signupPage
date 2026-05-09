# Dribbble Signup UI

A minimalist signup screen for React Native/Expo inspired by Dribbble design standards.

## Project Structure

- assets/ : Contains vector icons (SVG) used in the UI.
- src/components/Signup.jsx : The core signup component with custom styling and keyboard handling.
- src/app/index.tsx : Entry point rendering the Signup component.

## Usage Guide

To use the Signup component in your own project:

1. Dependencies
Ensure you have the following installed:
- react-native-svg
- expo-image

2. Asset Configuration
Copy the svg files from the /assets folder into your project's asset directory.

3. Import and Implementation
Import the component into your main application file:

import Signup from './src/components/Signup';

export default function App() {
  return <Signup />;
}

## Technical Implementation

- Uses KeyboardAvoidingView with platform-specific behavior for stable layout.
- Implements ScrollView with keyboardShouldPersistTaps to ensure stable input focus.
- Native styling using StyleSheet for performance.
- Vector asset rendering via expo-image.
