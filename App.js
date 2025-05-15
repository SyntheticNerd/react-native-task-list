import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import styles from "./Styles";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style={"light"} />
      <View style={styles.appContainer}>
        <View style={styles.goalsContainer}>
          <Text style={styles.globalText}>List of Goals</Text>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: "#ccc",
              paddingTop: 16,
              marginTop: 16,
            }}
          >
            <FlatList
              data={goals}
              keyExtractor={(item, index) => item.id}
              renderItem={(itemData) => (
                <GoalItem
                  itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                />
              )}
            />
          </View>
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          modalIsVisible={modalIsVisible}
          cancelAddGoal={endAddGoalHandler}
        />
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#9a8d51"
        />
      </View>
    </>
  );
}
