import { View, SafeAreaView } from 'react-native';
import { Header } from './Components';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
      </View>
    </SafeAreaView>
  );
}
