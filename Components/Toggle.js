import { StyleSheet, Pressable, View, Text } from "react-native";
import AppTheme from "../Models/AppTheme";
import React, { useRef, useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

let _size = { width: 40, height: 20 };

export default function Toggle({
  size,
  onChange,
  toggleOnChild = null,
  toggleOffChild = null,
  trackBorderColor = AppTheme.tertiary,
  trackColor = AppTheme.tertiary,
  knobColor = AppTheme.secondary,
  knobBorderColor = AppTheme.tertiary + "66",
  toggle = false,
  knobOnTop = true,
}) {
  if (size != null) _size = size;

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const scale = useSharedValue(1);

  const animatedKnobStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    animate();
  }, []);

  function animate() {
    if (toggle) {
    } else {
    }
  }

  function onSwitchToggle() {
    toggle = !toggle;
    scale.value = 0;
    scale.value = withTiming(1, { duration: 250 });
    if (onChange) onChange.call();
    forceUpdate();
  }

  function CutomText(text) {
    return (
      <Text style={[styles.toggleText, { right: _size.width * 0.03 }]}>
        {text}
      </Text>
    );
  }
  var circleSize = _size.height * 0.75;
  const styles = StyleSheet.create({
    track: {
      width: _size.width,
      height: _size.height,
      backgroundColor: trackColor,
      borderRadius: _size.height * 0.5,
      borderWidth: 1,
      borderColor: trackBorderColor,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 2,
    },
    knob: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize * 0.5,
      backgroundColor: knobColor,
      borderColor: knobBorderColor,
      borderWidth: 1,
      position: "absolute",
      left: toggle ? _size.width * 0.5 : _size.width * 0.03,
    },
    toggleText: {
      color: AppTheme.text,
      fontSize: 8,
      textAlign: "center",
    },
    toggleChild: {
      width: "90%",
      height: "100%",
      position: "absolute",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      padding: _size.width * 0.03,
    },
  });

  const trackOffChild = toggleOffChild ?? CutomText("Off");
  const trackOnChild = toggleOnChild ?? CutomText("On");

  const knob = <Animated.View style={[styles.knob, animatedKnobStyle]} />;

  const renderLayout = knobOnTop ? (
    <>
      <View style={styles.toggleChild}>
        {trackOffChild}
        {trackOnChild}
      </View>
      {knob}
    </>
  ) : (
    <>
      {knob}
      <View style={styles.toggleChild}>
        {trackOffChild}
        {trackOnChild}
      </View>
    </>
  );

  return (
    <Pressable styles={{ alignItems: "flex-end" }} onPress={onSwitchToggle}>
      <View style={styles.track}>{renderLayout}</View>
    </Pressable>
  );
}
