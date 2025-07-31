import { Stack } from "expo-router";

export default function RootLayout() {
 <Stack >
  <Stack.Screen name="index" options={{ headerShown: false }} />
  <Stack.Screen name="pokemon" options={{ headerShown: false }} />
  </Stack>
}
