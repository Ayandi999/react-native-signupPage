# Dribbble Signup UI

A minimalist signup screen for React Native/Expo inspired by Dribbble design standards.

## Requirements
- Expo SDK 55 or above

## Project Structure
- assets/ : Vector icons (SVG)
- src/components/Signup.jsx : Core signup component
- src/app/index.tsx : Main entry point

## Guide 1: Forking the Entire Project
If you wish to use this repository as a boilerplate:

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the development server:
   npx expo start

## Guide 2: Using the Component Individually
If you want to integrate only the Signup component into an existing project:

1. Install Dependencies
   npx expo install react-native-svg expo-image

2. Copy Assets
   Copy all SVG files from the /assets directory to your project's assets folder.

3. Import Component
   Copy src/components/Signup.jsx to your project and update the asset import paths if necessary.

4. Implementation
   import Signup from './components/Signup';

   export default function App() {
     return <Signup />;
   }

## Technical Implementation
- KeyboardAvoidingView with platform-specific behavior
- ScrollView with keyboardShouldPersistTaps
- Native StyleSheet for performance
- expo-image for vector asset rendering
