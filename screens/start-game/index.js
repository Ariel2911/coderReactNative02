import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Card, CustomText, Input, NumberContainer } from '../../Components';
import { styles } from './styles';
import theme from '../../constants/theme';

const StartGame = ({ onStartGame }) => {
  const [enteredvalue, setEnteredvalue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const onHandlerChangeText = (text) => {
    setEnteredvalue(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerResetInput = () => {
    setEnteredvalue('');
    setConfirmed(false);
  }

  const onHanddlerConfirmeInput = () => {
    const choiseNumber = parseInt(enteredvalue)
    if(choiseNumber === NaN || choiseNumber <= 0 || choiseNumber > 99) return
    setConfirmed(true)
    setSelectedNumber(parseInt(enteredvalue))
    setEnteredvalue('')   
  }

  const confirmedOutput = confirmed ? (
    <Card style={styles.inputContainer}>
      <CustomText>Tu selección</CustomText>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button 
        title='Empezar Juego'  
        onPress={() => onStartGame(selectedNumber)} 
        color= {theme.colors.secondary}
      />
    </Card>
  ): null

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <CustomText style={styles.text}>Comenzar Juego</CustomText>
        <Card style={styles.inputContainer}>
          <CustomText style={styles.subtitle}>Elija un número</CustomText>
          <Input
            placeholder="11"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.textColor}
            maxLendth={2}
            style={styles.input}
            value={enteredvalue}
            onChangeText={(text) => onHandlerChangeText(text)}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Limpiar"
              color={theme.colors.secondary}
              onPress={() => onHandlerResetInput()}
            />
            <Button
              title="Confirmar"
              color={theme.colors.secondary}
              onPress={() => onHanddlerConfirmeInput()}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
