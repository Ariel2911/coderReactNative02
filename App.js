import React, { useState }  from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Header } from './Components';
import GameScren from './screens/game-screen';
import StartGame from './screens/start-game';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import theme from './constants/theme';

export default function App() {
  const [ loaded ] = useFonts({
    "Ubuntu-regular": require('./assets/fonts/Ubuntu-Regular.ttf'),
    "Ubuntu-bold" : require('./assets/fonts/Ubuntu-Bold.ttf')
  })
  const [userNumber, setUserNumber] = useState();

  if(!loaded) {
    return <ActivityIndicator size='large' color={theme.colors.primary} />
  }
  const onStartGame = (selectedNumber ) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGame onStartGame = {onStartGame} />;

  if(userNumber) {
    content = <GameScren userOptions={userNumber} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        {content}
      </View>
    </SafeAreaView>
  );
}
