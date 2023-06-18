import { View, StyleSheet, Text } from "react-native";
import AppTheme from "./Models/AppTheme";
import CalculatorButton from "./Components/calculator_button";
import EqualButton from "./Components/equal_button";
import {
  addChar,
  calculate,
  deleteChar,
  input,
  result,
} from "./Data/Calculator";
import { useState } from "react";
import {
  FunctionButtons,
  MemoryFunctionButtons,
  NumPadButtons,
  OperationButtons,
} from "./Constants";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  function handleInputs(btnInput) {
    var isNum = false;
    for (var i = 0; i < NumPadButtons.length; i++) {
      if (NumPadButtons[i] == btnInput) {
        isNum = true;
        break;
      }
    }

    if (isNum) {
    } else {
      var isOperator = false;
      for (var i = 0; i < OperationButtons.length; i++) {
        if (OperationButtons[i] == btnInput) {
          isOperator = true;
          break;
        }
      }

      if (isOperator) {
      } else {
        var isFunction = false;
        for (var i = 0; i < FunctionButtons.length; i++) {
          if (FunctionButtons[i] == btnInput) {
            isFunction = true;
            break;
          }
        }

        if (isFunction) {
        } else {
          // handle memory buttons here
        }
      }
    }
    switch (btnInput) {
      default:
        break;
      case NumPadButtons.clearAll:
        break;
      case NumPadButtons.divide:
    }
    addChar(btnInput);
    setTextInput(input);
  }

  function handleOperationInput(btnInput) {
    addChar(btnInput);
    setTextInput(input);
  }

  function outputResultButtonHandler() {
    calculate();
  }
  const styles = StyleSheet.create({
    topPanel: {
      width: "100%",
      height: "30%",
      alignItems: "center",
      justifyContent: "center",
    },
    bottomPanel: {
      width: "100%",
      height: "60%",
      flexDirection: "row",
    },
    row: {
      flexDirection: "row",
    },
    column: {
      flexDirection: "column",
    },
    resultText: {
      color: AppTheme.text,
      textAlign: "center",
      fontSize: 32,
    },
  });
  const topPanel = (
    <View style={styles.topPanel}>
      <Text style={styles.resultText}>{textInput}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );

  const bottomPanel = (
    <View style={styles.bottomPanel}>
      <View style={[styles.column, { flex: 1 }]}>
        <CalculatorButton
          text={"AC"}
          textColor={AppTheme.tertiary}
          fontSize={14}
        />
        <CalculatorButton
          text={"7"}
          onPress={() => {
            handleInputs(7);
          }}
        />
        <CalculatorButton
          text={"4"}
          onPress={() => {
            handleInputs(4);
          }}
        />
        <CalculatorButton
          text={"1"}
          onPress={() => {
            handleInputs(1);
          }}
        />
        <CalculatorButton
          text={"↺"}
          textColor={AppTheme.tertiary}
          fontSize={24}
          onPress={() => {
            deleteChar();
            setTextInput(input);
          }}
        />
      </View>
      <View style={[styles.column, { flex: 1 }]}>
        <CalculatorButton
          text={"⁺∕₋"}
          textColor={AppTheme.tertiary}
          onPress={handleInputs}
        />
        <CalculatorButton
          text={"8"}
          onPress={() => {
            handleInputs(8);
          }}
        />
        <CalculatorButton
          text={"5"}
          onPress={() => {
            handleInputs(5);
          }}
        />
        <CalculatorButton
          text={"2"}
          onPress={() => {
            handleInputs(2);
          }}
        />
        <CalculatorButton
          text={"0"}
          onPress={() => {
            handleInputs(0);
          }}
        />
      </View>
      <View style={[styles.column, { flex: 1 }]}>
        <CalculatorButton
          text={"( )"}
          textColor={AppTheme.tertiary}
          onPress={handleInputs}
        />
        <CalculatorButton
          text={"9"}
          onPress={() => {
            handleInputs(9);
          }}
        />
        <CalculatorButton
          text={"6"}
          onPress={() => {
            handleInputs(6);
          }}
        />
        <CalculatorButton
          text={"3"}
          onPress={() => {
            handleInputs(3);
          }}
        />
        <CalculatorButton
          text={"."}
          textColor={AppTheme.tertiary}
          fontSize={32}
          onPress={() => {
            handleInputs(".");
          }}
        />
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
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: AppTheme.primary,
      }}
    >
      {topPanel}
      {bottomPanel}
    </View>
  );
}
