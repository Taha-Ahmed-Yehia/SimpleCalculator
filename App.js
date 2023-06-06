import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, FlatList } from "react-native";
import AppTheme from "./Models/AppTheme";
import Toggle from "./Models/Toggle";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CalculatorButton from "./Components/custom_button";
import EqualButton from "./Components/equal_button";
import { Octicons } from "@expo/vector-icons";

const STYLES = ["dark", "light"];
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [theme, setTheme] = useState("light");
  theme == "light" ? AppTheme.light() : AppTheme.dark();

  const styles = StyleSheet.create({
    main: {
      flexDirection: "column",
      backgroundColor: AppTheme.primary,
    },
    appBar: {
      backgroundColor: AppTheme.secondary,
      width: "100%",
      height: "5%",
      borderBottomRightRadius: windowWidth * 0.05,
      borderBottomLeftRadius: windowWidth * 0.05,
    },
    appBarLG: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: windowWidth * 0.025,
      borderBottomRightRadius: windowWidth * 0.05,
      borderBottomLeftRadius: windowWidth * 0.05,
    },
    topPanel: {
      backgroundColor: AppTheme.primary,
      width: "100%",
      height: "35%",
    },
    bottomPanel: {
      backgroundColor: AppTheme.primary,
      width: "100%",
      height: "60%",
      borderTopRightRadius: windowWidth * 0.1,
      borderTopLeftRadius: windowWidth * 0.1,
      flexDirection: "row",
    },
    row: {
      flexDirection: "row",
    },
    column: {
      flexDirection: "column",
    },
  });
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  function onThemeToggle() {
    setTheme(theme == "light" ? "dark" : "light");
    setStatusBarStyle(theme == "light" ? STYLES[1] : STYLES[0]);
  }
  const appBar = (
    <View style={styles.appBar}>
      <StatusBar
        backgroundColor={AppTheme.secondary}
        style={statusBarStyle}
        translucent={false}
      />
      <LinearGradient
        colors={[AppTheme.secondary, AppTheme.secondary]}
        style={styles.appBarLG}
        start={{ x: 0.0, y: 0 }}
        end={{ x: 0.0, y: 2 }}
      >
        <Toggle
          onChange={() => {
            onThemeToggle();
          }}
          size={{ width: 40, height: 20 }}
          toggleOffChild={
            <Octicons
              name="moon"
              size={14}
              color={AppTheme.text}
              style={{ left: 2 }}
            />
          }
          toggleOnChild={
            <Octicons name="sun" size={14} color={AppTheme.text} />
          }
        />
      </LinearGradient>
    </View>
  );

  const topPanel = <View style={styles.topPanel}></View>;

  const bottomPanel = (
    <View style={styles.bottomPanel}>
      <View style={[styles.column, { flex: 1 }]}>
        <CalculatorButton text={"AC"} textColor={AppTheme.tertiary} />
        <CalculatorButton text={"7"} />
        <CalculatorButton text={"4"} />
        <CalculatorButton text={"1"} />
        <CalculatorButton text={"↺"} textColor={AppTheme.tertiary} />
      </View>
      <View style={[styles.column, { flex: 1 }]}>
        <CalculatorButton text={"⁺∕₋"} textColor={AppTheme.tertiary} />
        <CalculatorButton text={"8"} />
        <CalculatorButton text={"5"} />
        <CalculatorButton text={"2"} />
        <CalculatorButton text={"0"} />
      </View>
      <View style={[styles.column, { flex: 1 }]}>
        <CalculatorButton text={"( )"} textColor={AppTheme.tertiary} />
        <CalculatorButton text={"9"} />
        <CalculatorButton text={"6"} />
        <CalculatorButton text={"3"} />
        <CalculatorButton text={"."} textColor={AppTheme.tertiary} />
      </View>
      <View
        style={[
          styles.column,
          {
            height: "95%",
            width: "20%",
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
            backgroundColor: AppTheme.secondary,
          },
        ]}
      >
        <CalculatorButton text={"/"} />
        <CalculatorButton text={"*"} />
        <CalculatorButton text={"-"} />
        <CalculatorButton text={"+"} />
        <EqualButton onPress={() => {}} />
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      {appBar}
      {topPanel}
      {bottomPanel}
    </View>
  );
}
