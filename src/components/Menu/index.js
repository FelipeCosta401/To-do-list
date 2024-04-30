import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Navigate } from "react-router-native";

const Menu = ({ navigation }) => {
  const styles = StyleSheet.create({
    menu: {
      backgroundColor: "#96bd85",
      width: "95%",
      height: "90%",
      borderRadius: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  });
  return (
    <>
      <View style={styles.menu}>
        <Icon
          name="home"
          size={45}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <Icon
          name="plus-circle"
          size={45}
          color="black"
          onPress={() => navigation.navigate("AddTask")}
        />
        <Icon name="gear" size={45} color="black" />
      </View>
    </>
  );
};

export default Menu;
