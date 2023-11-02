import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES as Categories } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = (data) => {
    const handleButtonPress = () => {
      navigation.navigate("Items", {
        categoryId: data.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={data.item.title}
        color={data.item.color}
        onPress={handleButtonPress}
      />
    );
  };
  return (
    <FlatList
      data={Categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
