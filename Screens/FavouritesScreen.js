import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { MEALS as Meals } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favouritesContext";
import MealItem from "../Components/MealItem";
import { ScrollView } from "react-native-gesture-handler";

const FavouritesScreen = () => {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favMealsData = Meals.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  return (
    <ScrollView>
      <View
        style={[
          styles.favContainer,
          { justifyContent: favMealsData.length === 0 ? "center" : null },
        ]}
      >
        {favMealsData.length !== 0 ? (
          favMealsData.map((favMeal) => (
            <MealItem
              key={favMeal.id}
              title={favMeal.title}
              imageUrl={favMeal.imageUrl}
              affordability={favMeal.affordability}
              duration={favMeal.duration}
              complexity={favMeal.complexity}
            />
          ))
        ) : (
          <Text>No Favourite Meals, Add One!</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  favContainer: {
    flex: 1,
    alignItems: "center",
  },
});
