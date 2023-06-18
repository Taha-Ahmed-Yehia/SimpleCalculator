import { StyleSheet, Pressable, View, Text } from "react-native";
import AppTheme from "../Models/AppTheme";

export default function CalculatorButton({
  text = "null",
  textColor = AppTheme.text,
  fontSize = 16,
  backgroundColor,
  onPress = null,
  linearGradient,
}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor,
    },
    text: {
      color: textColor,
      fontSize: fontSize,
    },
  });
  return (
    <Pressable
      onPress={() => {
        console.log(text);
        if (onPress != null) onPress.call();
      }}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
