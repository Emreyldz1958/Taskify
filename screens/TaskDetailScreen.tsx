import { View, Text, StyleSheet, Switch } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

export default function TaskDetailScreen({ route }: Props) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Görev Başlığı:</Text>
      <Text style={styles.title}>{task.title}</Text>

      <Text style={styles.label}>Tamamlandı mı?</Text>
      <Switch value={task.completed} disabled />

      <Text style={styles.label}>Oluşturulma Tarihi:</Text>
      <Text style={styles.text}>
        {new Date(task.createdAt).toLocaleString()}
      </Text>

      {task.dueDate && (
        <>
          <Text style={styles.label}>Bitiş Tarihi:</Text>
          <Text style={styles.text}>
            {new Date(task.dueDate).toLocaleDateString()}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    color: '#333',
  },
});
