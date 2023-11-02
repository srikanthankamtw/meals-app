import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
  onPress,
}) => {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View style={styles.mealItemInnerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image}></Image>
            <Text style={styles.text}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  mealItemInnerContainer: {
    overflow: "hidden",
    borderRadius: 12,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    margin: 10,
    width: 360,
    height: 250,
  },
});
