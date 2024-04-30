import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#96bd85",
  },

  header: {
    height: "20%",
    width: "100%",
  },

  main: {
    backgroundColor: "#dcdcdc",
    padding: 30,
    height: "70%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footer: {
    backgroundColor: "#dcdcdc",
    height: "10%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
