import React from "react";
import taskLogo from "../../assets/tasks.png";
import { View, Image, Button, TextInput } from "react-native";
import { styles } from "./styles";

const AddTask = ({
  placeholder,
  textItem,
  onHandleChangeText,
  buttonTitle,
  addItem,
  placeholderTextColor,
  buttonColor,
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <Image style={{ width: 35, height: 42 }} source={taskLogo} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={placeholderTextColor}
          value={textItem}
          //retorna el valor de lo que yo escribo en el campo en string
          onChangeText={onHandleChangeText}
        />
        <Button title={buttonTitle} onPress={addItem} color={buttonColor} />
      </View>
    </>
  );
};

export default AddTask;
