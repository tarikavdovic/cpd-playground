import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
];

export default function FilterBar({ filter, onChange }) {
  return (
    <View style={styles.row}>
      {FILTERS.map((f) => (
        <Pressable
          key={f.value}
          onPress={() => onChange(f.value)}
          style={[
            styles.button,
            filter !== f.value && { backgroundColor: "#9AA6B5" },
          ]}
        >
          <Text style={styles.buttonText}>{f.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
