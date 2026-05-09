import { View } from "react-native";
import { Stack } from "expo-router";
import Signup from '../components/Signup.jsx'

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Signup/>
    </View>
  );
}
