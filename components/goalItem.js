import { Pressable, Text, View } from "react-native";
import styles from "../Styles";

function GoalItem(props) {
  const { itemData, onDeleteItem } = props;
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: "#574f2c"}}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
