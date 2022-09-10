import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

const AddItem = ({ item, closeText, onHandleModal }) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.value}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onHandleModal(item.id);
          }}
        >
          <Text style={styles.delete}>{closeText}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddItem;
