import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { TaskProvider } from './contexts/TaskContext';
import { Task } from './types/Task';

export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
  TaskDetail: { task: Task };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <TaskProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Görev Ekle' }}/>
            <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: 'DETAY' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </TaskProvider>
  );
}
