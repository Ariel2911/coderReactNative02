import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../constants/theme';

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: theme.colors.textColor,
    fontSize: 18,
  },
  inputContainer: {
    // width: 300,
    width: '80%',
    // maxWidth: '80%',
    maxWidth: '90%',
    minWidth: width * 0.7,
    alignItems: 'center',
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: theme.fontSize.large,
  },
  input: {
    width: 40,
    textAlign: 'center',
    fontSize: theme.fontSize.xLarge,
    height: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    // width: '100%',
    width: width /1.5,
    justifyContent: 'space-between',
    paddingVertical: width > 600 ? 20 : 10,
    // paddingHorizontal: 25,
  },
});
