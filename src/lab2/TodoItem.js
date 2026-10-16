import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <View style={[styles.row, { alignItems: "center" }]}>
      <Pressable onPress={() => onToggle(todo.id)} style={{ flex: 1 }}>
        <Text
          style={
            todo.done && {
              textDecorationLine: "line-through",
              color: "#5B6475",
            }
          }
        >
          {todo.title}
        </Text>
      </Pressable>
      <Pressable onPress={() => onRemove(todo.id)} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );
}
