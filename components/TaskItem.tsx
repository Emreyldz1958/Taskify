import React from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { Task } from '../types/Task';

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onPress?: () => void;
};

function TaskItem({ task, onToggle, onDelete, onPress }: Props) {
  return (
    <View style={[styles.item, task.completed && styles.completedItem]}>
      <View style={styles.topRow}>
        <Pressable onPress={onPress} style={{ flex: 1 }}>
          <Text style={[styles.text, task.completed && styles.completedText]}>
            {task.title}
          </Text>
        </Pressable>
        <Switch value={task.completed} onValueChange={() => onToggle(task.id)} />
      </View>

      <Pressable onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>🗑 Görevi Sil</Text>
      </Pressable>
    </View>
  );
}

export default React.memo(TaskItem); // React.memo ile performans artırımı

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    flex: 1,
    fontWeight: '500',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  completedItem: {
    backgroundColor: '#e0e0e0',
  },
  delete: {
    marginTop: 10,
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
  },
});
