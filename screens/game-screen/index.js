import react, { useState } from "react";
import { View, Text, Button } from "react-native";
import { NumberContainer, Card } from "../../Components";
import theme from "../../constants/theme";
import { styles } from "./styles";

const generateRandomNumber = ( min, max, exclude ) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * ( max-min )) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber( min, max, exclude );
  }
  else {
    return randomNumber;
  }
}

const GameScren = ({ userOptions  }) => {
  const [ curretGuess, setCurrentGuess ] = useState(generateRandomNumber(1, 99, userOptions))

  return(
    <View style={styles.container} >
      <Text>La suposición del oponente</Text>
      <NumberContainer>{curretGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button 
          title="Menor" 
          onPress={() => null}
          color={theme.colors.secondary}
        />
        <Button 
          title="Mayor" 
          onPress={() => null}
          color={theme.colors.secondary}
        />
      </Card>
    </View>
  )
}

export default GameScren;