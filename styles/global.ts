import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  titleText: {
    fontFamily: 'Agbalumo',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorMessage: {
    color: 'crimson',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 10,
    marginTop: 6,
    paddingLeft: 8,
    textAlign: 'left'
  }
})