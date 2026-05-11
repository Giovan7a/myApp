import { Stack } from 'expo-router';
import { TaskProvider } from './TaskContext';

export default function Layout() {
  return (
    <TaskProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </TaskProvider>
  );
}
