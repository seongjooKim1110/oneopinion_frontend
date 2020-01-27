import { Dimensions } from "react-native";

const constans = () => {
  const { width, height } = Dimensions.get("screen");
  const max = Math.max(width, height);
  const min = Math.min(width, height);

  return { width, height, max, min };
};

export default constans();
