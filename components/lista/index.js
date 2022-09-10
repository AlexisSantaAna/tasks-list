import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";

const Lista = ({ itemList, renderItem }) => {
  return (
    <>
      {/* El flatlist me da el comportamiento del scrollView */}
      <FlatList
        style={styles.itemList}
        //recibe la base de datos dinámica
        data={itemList}
        //El componente a renderizar, se envia la data por props automáticamente
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default Lista;
