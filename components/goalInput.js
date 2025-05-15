import { View, TextInput, Button, Modal, Image } from "react-native";
import styles from "../Styles";
import { useState } from "react";

function GoalInput(props) {
  const { onAddGoal, modalIsVisible, cancelAddGoal } = props;

  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(input) {
    setEnteredGoalText(input);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor="#ccc"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color={"#9d3e3e"} onPress={cancelAddGoal} />
          <Button
            title="Add Goals"
            onPress={addGoalHandler}
            color={"#9a8d51"}
          />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
