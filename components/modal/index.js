import React from "react";
//Lo bueno de modular la app es que no necesito importar los componentes de React Native como Text, View, etc. Los importo solo en app.
import { Modal } from "react-native";

//El custom modal recibe children, implica TODO el contenido dentro del componente, en este caso del Modal
const CustomModal = ({
  children,
  visible,
  animationType,
  onRequestClose,
  transparent,
}) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
