import { View, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import TaskItem from '../components/TaskItem';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';
import { useTaskContext } from '../contexts/TaskContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { tasks, setTasks } = useTaskContext();

  const handleToggle = (id: string) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const handleDelete = (id: string) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onPress={() => navigation.navigate('TaskDetail', { task: item })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
});
