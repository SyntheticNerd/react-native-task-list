import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    borderColor: "#ccc",
    backgroundColor: "#2b2b2b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    borderRadius: 6,
    color: "#fff",
    backgroundColor: "#3b3b3b",
  },
  goalsContainer: {
    flex: 11,
  },
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#9a8d51",
  },
  globalText: {
    color: "#fff",
  },
  goalText: {
    color: "#fff",
    padding: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
});

export default styles;
