import react from "react";
import { View, Text, StyleSheet } from "react-native";

const Cards = () => {
  const styles = StyleSheet.create({
    card: {
      width: "100%",
      height: "20%",
      backgroundColor: "grey",
      borderRadius: 14,
      padding: 15,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 30,
    },
  });

  return (
    <>
      <View style={styles.card}>
        <Text>Esse é um card</Text>
      </View>
    </>
  );
};

export default Cards;
