import react from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";
import { container, header, main, footer } from "../../Syles/index";

import Menu from "../../components/Menu";
import Cards from "../../components/Cards";

const Home = ({ navigation }) => {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.main}>
            <Cards />
            <Cards />
            <TextInput placeholder="teste" />
          </View>
          <View style={styles.footer}>
            <Menu navigation={navigation} />
          </View>
        </View>
    </>
  );
};

export default Home;
