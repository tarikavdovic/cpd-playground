import { useState } from "react";
import { Text, View } from "react-native";
import AddTodo from "./AddTodo";
import FilterBar from "./FilterBar";
import TodoItem from "./TodoItem";
import { styles } from "./styles";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Install Expo Go", done: true },
    { id: "2", title: "Finish Lab 2", done: false },
  ]);
  const [filter, setFilter] = useState("all");

  // Task 5
  function addTodo(title) {
    setTodos([...todos, { id: Date.now().toString(), title, done: false }]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Task 6
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  const leftCount = todos.filter((todo) => !todo.done).length;

  // Task 7
  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  return (
    <View style={styles.screen}>
      <AddTodo onAdd={addTodo} />
      <FilterBar filter={filter} onChange={setFilter} />
      <Text style={styles.muted}>{leftCount} left</Text>

      {todos.length === 0 ? (
        <Text style={styles.muted}>No tasks yet</Text>
      ) : (
        visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))
      )}
    </View>
  );
}
