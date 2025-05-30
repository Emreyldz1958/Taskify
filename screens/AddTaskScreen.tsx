import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Task } from '../types/Task';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { v4 as uuidv4 } from 'uuid';
import { Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useTaskContext } from '../contexts/TaskContext';
import DateTimePicker from '@react-native-community/datetimepicker';






type Props = NativeStackScreenProps<RootStackParamList, 'AddTask'>;


export default function AddTaskScreen({ navigation }: Props) {
  const [taskTitle, setTaskTitle] = useState('');
  const { tasks, setTasks } = useTaskContext(); 
  const [dueDate, setDueDate] = useState<Date | undefined>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);


  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      if (Platform.OS === 'android') {
        Alert.alert('Uyarı', 'Android cihazdasınız, görev başlığı boş olamaz!');
      } else {
        Alert.alert('Uyarı', 'IOS cihazdasınız, görev başlığı boş olamaz!');
      }
      return;
    }



    const newTask: Task = {
      id: uuidv4(),
      title: taskTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    dueDate: dueDate?.toISOString(),
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    Alert.alert('Başarılı', 'Görev eklendi');
    navigation.goBack();
  };

 return (
  <View style={styles.container}>
    <Text style={styles.label}>Görev Başlığı</Text>
    
    <TextInput
      mode="outlined"
      label=""
      placeholder="Yeni görev girin..."
      value={taskTitle}
      onChangeText={setTaskTitle}
      style={{ marginBottom: 20 }}
    />

    <Button onPress={() => setShowDatePicker(true)} mode="outlined" style={{ marginBottom: 10 }}>
      Bitiş Tarihi Seç
    </Button>

    {dueDate && (
      <Text style={{ marginBottom: 10 }}>
        Seçilen Tarih: {dueDate.toLocaleDateString()}
      </Text>
    )}

    {showDatePicker && (
      <DateTimePicker
        value={dueDate || new Date()}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          setShowDatePicker(false);
          if (selectedDate) setDueDate(selectedDate);
        }}
      />
    )}

    <Button mode="contained" onPress={handleAddTask}>
      Görevi Ekle
    </Button>
  </View>
);

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
  },
});
