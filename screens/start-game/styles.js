import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

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
    width: 300,
    maxWidth: '80%',
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
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});
