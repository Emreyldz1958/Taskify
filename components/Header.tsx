import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function Header({ navigation }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>📝 Görev Listesi</Text>
      <Button title="➕ Yeni Görev Ekle" onPress={() => navigation.navigate('AddTask')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
