import { Text, StyleSheet } from 'react-native';

export default function EmptyState() {
  return (
    <Text style={styles.empty}>
      Henüz görev yok. Yeni bir görev ekleyebilirsin!
    </Text>
  );
}

const styles = StyleSheet.create({
  empty: {
    marginTop: 40,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});
