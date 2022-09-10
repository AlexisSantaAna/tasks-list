import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    fontFamily: "normal",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    height: 300,
    width: 350,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  modalTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  modalMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
  },
  selectedTask: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
