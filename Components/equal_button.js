import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppTheme from "../Models/AppTheme";

export default function EqualButton({ onPress = null }) {
  return (
    <Pressable
      onPress={() => {
        console.log(text);
        if (onPress != null) onPress.call();
      }}
      style={styles.container}
    >
      <LinearGradient
        colors={[AppTheme.special, AppTheme.secondary]}
        style={styles.linearGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        locations={[0.0, 2]}
      >
        <Text style={{ color: AppTheme.text }}>=</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.secondary,
    borderBottomLeftRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 100,
  },
});
