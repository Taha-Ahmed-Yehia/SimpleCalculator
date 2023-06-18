import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppTheme from "./Models/AppTheme";
import { StatusBar } from "expo-status-bar";
import Home from "./Home";
import Toggle from "./Components/Toggle";
import { Octicons } from "@expo/vector-icons";
import { windowWidth } from "./Constants";
import SharedPrefs from "./Data/SharedPrefs";

const STYLES = ["dark", "light"];
const sharedPrefs = SharedPrefs.getInstance();

export default function App() {
  const [theme, setTheme] = useState("light");
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  const loadTheme = async () => {
    const themeName = await sharedPrefs.getValue("theme");
    if (themeName != null) {
      setTheme(themeName);
    }
  };

  const saveTheme = async (currentTheme) => {
    await sharedPrefs.storeValue("theme", currentTheme);
  };

  function onThemeToggle() {
    var currentTheme = theme == "light" ? "dark" : "light";
    setTheme(currentTheme);
    setStatusBarStyle(currentTheme == "light" ? STYLES[1] : STYLES[0]);
    saveTheme(currentTheme);
  }

  React.useEffect(() => {
    loadTheme();
  }, [theme]);

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
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: windowWidth * 0.025,
      borderBottomRightRadius: windowWidth * 0.05,
      borderBottomLeftRadius: windowWidth * 0.05,
    },
  });

  const appBar = (
    <View style={styles.appBar}>
      <Toggle
        onChange={() => {
          onThemeToggle();
        }}
        size={{ width: 45, height: 25 }}
        toggleOnChild={
          <Octicons
            name="moon"
            size={14}
            color={AppTheme.text}
            style={{ textAlign: "center" }}
          />
        }
        toggleOffChild={
          <Octicons
            name="sun"
            size={14}
            color={AppTheme.text}
            style={{ right: 2 }}
          />
        }
        toggle={theme != "light"}
      />
    </View>
  );

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={AppTheme.secondary}
        style={statusBarStyle}
        translucent={false}
      />
      {appBar}
      <Home></Home>
    </View>
  );
}
