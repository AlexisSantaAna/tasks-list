import { useState } from "react";
import { Button, Text, View } from "react-native";
import { AddItem, AddTask, CustomModal, Lista } from "./components/index";
import { styles } from "./styles";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  //Modal y delete
  const onHandleDelete = (id) => {
    //Toma la lista, filtra todos los items cuyo ID sea distinto del seleccionado y devuelve un nuevo array
    setItemList(itemList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandleModal = (id) => {
    setModalVisible(!modalVisible);
    setItemSelected(itemList.find((item) => item.id === id));
  };

  //Detecta cambios en el input, se guarda en textItem para crear el objeto
  const onHandleChangeText = (text) => {
    setTextItem(text);
  };

  //Agregar items
  const addItem = () => {
    //El setter me trae por parámetro una copia de estado anterior
    {
      textItem &&
        setItemList((currentItems) => [
          ...currentItems,
          { id: Math.random().toString(), value: textItem },
        ]);
      setTextItem("");
    }
  };

  const renderItem = ({ item }) => (
    <AddItem item={item} closeText={"X"} onHandleModal={onHandleModal} />
  );

  return (
    <View style={styles.container}>
      <AddTask
        addItem={addItem}
        placeholder={"New task"}
        textItem={textItem}
        onHandleChangeText={onHandleChangeText}
        buttonTitle={"Add"}
        placeholderTextColor={"#000"}
        buttonColor={"#6D454C"}
      />
      <Lista itemList={itemList} renderItem={renderItem} />
      <CustomModal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                ¿Estas seguro que quieres eliminar?
              </Text>
            </View>
            <View style={styles.modalMessageContainer}>
              <Text style={styles.selectedTask}>{itemSelected?.value}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Eliminar"
                onPress={() => onHandleDelete(itemSelected?.id)}
                color="#4A306D"
              />
              <Button
                title="Cancelar"
                onPress={() => setModalVisible(!modalVisible)}
                color="#ccc"
              />
            </View>
          </View>
        </View>
      </CustomModal>
    </View>
  );
}
