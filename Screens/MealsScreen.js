import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES as Categories, MEALS as Meals } from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import { useEffect } from "react";

const MealsScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const filteredMealDataBasedOnCategoryId = Meals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    const categoryTitle = Categories.find(
      (category) => category.id == categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = (data) => {
    const itemData = data.item;
    const mealItemProps = {
      title: itemData.title,
      imageUrl: itemData.imageUrl,
      affordability: itemData.affordability,
      complexity: itemData.complexity,
      duration: itemData.duration,
    };
    const handleMealItemClick = () => {
      navigation.navigate("Item", { mealId: itemData.id });
    };
    return <MealItem {...mealItemProps} onPress={handleMealItemClick} />;
  };
  return (
    <View style={styles.mealContainer}>
      <FlatList
        data={filteredMealDataBasedOnCategoryId}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
});
