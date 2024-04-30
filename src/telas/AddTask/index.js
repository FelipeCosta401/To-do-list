import react from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import styles from "../../Syles/index";
import Menu from "../../components/Menu";

const Home = ({ navigation }) => {
  const [taskName, setTaskName] = useState("");
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.header}></View>
          <View style={styles.main}>
            <TextInput
              style={[MyStyles.input, MyStyles.sombreado]}
              onChangeValue={setTaskName}
              value={taskName}
              placeholder={"Nome da tarefa"}
            />
            <TextInput
              style={[MyStyles.input, MyStyles.sombreado]}
              onChangeValue={setTaskName}
              value={taskName}
              placeholder={"Nome da tarefa"}
            />
            <TextInput
              style={[MyStyles.input, MyStyles.sombreado]}
              onChangeValue={setTaskName}
              value={taskName}
              placeholder={"Nome da tarefa"}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const MyStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: "10%",
    padding: 10,
    borderRadius: 8,
    marginBottom: 50,
  },

  sombreado: {
    elevation: 5,
    shadowColor: "#000",
  },
});

export default Home;
