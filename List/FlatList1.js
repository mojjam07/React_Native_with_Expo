import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import pokemonList from "../data.json";

export default function FlatList1() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
          {pokemonList.map((pokemon) => {
            return (
              <View key={pokemon.id} style={styles.card}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          //   data={[]}
          renderItem={({ item }) => {
            // console.log(item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          // horizontal

          ItemSeparatorComponent={<View style={{ height: 16 }} />} // With this we can remove the marginBottom that separate the cards
          ListEmptyComponent={<Text>No Items found</Text>} // This displays if the list items is empty
          ListHeaderComponent={
            <Text style={styles.listHeader}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.listFooter}>End of List</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 20,
  },
  listHeader: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
  },
  listFooter: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
  },
});
