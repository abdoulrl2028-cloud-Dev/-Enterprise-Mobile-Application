import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store';

export default function RootLayout(): React.JSX.Element {
  const { initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
