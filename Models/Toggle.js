import { StyleSheet, Pressable, View, Text } from "react-native";
import AppTheme from "./AppTheme";
import { useState } from "react";

let _size = { width: 40, height: 20 };

export default function Toggle({
  size,
  onChange,
  toggleOnChild,
  toggleOffChild,
}) {
  if (size != null) {
    _size = size;
  }

  const [toggle, setToggle] = useState(false);
  function onSwitchToggle() {
    setToggle(!toggle);
    if (onChange) onChange.call();
  }
  var circleSize = _size.height * 0.75;
  var knobBorderColor = AppTheme.tertiary + "99";
  const styles = StyleSheet.create({
    track: {
      width: _size.width,
      height: _size.height,
      borderRadius: _size.height / 2,
      backgroundColor: AppTheme.secondary,
      borderWidth: 1,
      borderColor: AppTheme.tertiary,
      justifyContent: "center",
      alignItems: "center",
      alignItems: toggle ? "flex-end" : "flex-start",
      paddingHorizontal: 2,
    },
    knob: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: AppTheme.tertiary,
      color: AppTheme.tertiary,
      borderColor: knobBorderColor,
      borderWidth: 1,
    },
    toggleText: {
      color: AppTheme.text,
      fontSize: 8,
    },
    toggleChild: {
      backgroundColor: "#00000000",
      position: "absolute",
      left: toggle ? _size.width * 0.1 : _size.width * 0.5,
    },
  });

  var trackChild = toggle
    ? toggleOnChild ?? <Text style={styles.toggleText}>On</Text>
    : toggleOffChild ?? <Text style={styles.toggleText}>Off</Text>;
  return (
    <Pressable styles={{ alignItems: "flex-end" }} onPress={onSwitchToggle}>
      <View style={styles.track}>
        <View style={styles.toggleChild}>{trackChild}</View>
        <View style={styles.knob} />
      </View>
    </Pressable>
  );
}
