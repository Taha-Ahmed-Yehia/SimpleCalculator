import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;

//num pad buttons
export const NumPadButtons = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};

export const OperationButtons = {
  plus: "+",
  minus: "-",
  divide: "/",
  multiply: "*",
};
export const FunctionButtons = {
  clearAll: "AC",
  undo: "↺",
  pi: "π",
  dot: ".",
  present: "%",
  brackets: "( )",
  invertSign: "⁺∕₋",
};

export const MemoryFunctionButtons = {
  memoryAdd: "M+",
  memoryRemove: "M-",
  memoryStore: "MS",
  memoryRecall: "MR",
  memoryClear: "MC",
  memory: "M",
};
