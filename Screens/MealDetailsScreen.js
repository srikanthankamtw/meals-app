import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS as Meals } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { FavouritesContext } from "../store/context/favouritesContext";

const MealDetailsScreen = ({ route, navigation }) => {
  const favouriteMealsCtx = useContext(FavouritesContext);
  const mealId = route.params.mealId;
  const mealItem = Meals.find((meal) => meal.id == mealId);
  const isFavouriteMeal = favouriteMealsCtx.ids.includes(mealId);
  console.log(isFavouriteMeal, favouriteMealsCtx.ids);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealItem.title,
      headerRight: () => {
        return (
          <IconButton
            icon={isFavouriteMeal ? "heart" : "heart-outline"}
            color="red"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [mealId, navigation, changeFavouriteStatusHandler, isFavouriteMeal]);

  const changeFavouriteStatusHandler = () => {
    console.log("Fav!");
    isFavouriteMeal
      ? favouriteMealsCtx.removeFavourite(mealId)
      : favouriteMealsCtx.addFavourite(mealId);
  };

  return (
    <ScrollView>
      <View style={styles.mealDetailsContainer}>
        <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
        <View>
          <MealDetails
            duration={mealItem.duration}
            affordability={mealItem.affordability}
            complexity={mealItem.complexity}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Ingredients</Text>
        </View>
        {mealItem.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Steps</Text>
        </View>
        {mealItem.steps.map((step, index) => (
          <Text key={index}>{step}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  mealDetailsContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 2,
    alignItems: "center",
  },
  headerContainer: {
    marginVertical: 12,
  },
  text: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  image: {
    margin: 10,
    width: 420,
    height: 250,
  },
});
