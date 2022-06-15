import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

const CustomText = ({ style, children, ...props }) => {
  return(
    <Text {...props} style={{ ...style, ...styles.text }}>
      {children}
    </Text>
  )
}

export default CustomText;