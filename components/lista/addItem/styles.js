import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    fontSize: 15,
    color: "#6D454C",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCFF6C",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  delete: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#96ADC8",
    padding: 7,
    borderRadius: 2,
  },
});
