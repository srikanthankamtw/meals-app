import { Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View style={[styles.gridItemContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 12,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.45,
  },
  gridItemContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
