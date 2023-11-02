import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 10,
    fontSize: 12,
  },
});
