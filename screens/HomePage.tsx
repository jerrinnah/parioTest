import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import IconTab from "../components/IconTab";

const features = [
  {
    id: "01",
    image: require("../assets/tasks.png"),
    name: "Itenary",
  },
  {
    id: "02",
    image: require("../assets/plane.png"),
    name: "Plane",
  },
  {
    id: "03",
    image: require("../assets/box.png"),
    name: "Pack Help",
  },
  {
    id: "04",
    image: require("../assets/liesure.png"),
    name: "Here",
  },
  {
    id: "05",
    image: require("../assets/hotel.png"),
    name: "Here",
  },
  {
    id: "06",
    image: require("../assets/map.png"),
    name: "Here",
  },
  {
    id: "07",
    image: require("../assets/plate.png"),
    name: "Here",
  },
  {
    id: "09",
    image: require("../assets/drink.png"),
    name: "Here",
  },
  {
    id: "09",
    image: require("../assets/weather.png"),
    name: "Here",
  },
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <View style={styles.userRow}>
          <Text style={styles.user}>Hi Olivia</Text>
          <Image style={styles.img} source={require("../assets/avi.png")} />
        </View>
        <Text style={styles.detail}>
          All you need for your new trip right here.
        </Text>
      </View>

      <View style={styles.iconsContainer}>
        <FlatList horizontal={false} style={styles.flatlist}
          data={features}
          renderItem={({ item }) => {
            return <IconTab info={item} />;
          }}
          keyExtractor={(feature) => feature.id.toString()}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    width: "100%",
    height: "100%",
    // backgroundColor:'green',
  },
  img: {
    height: 50,
    width: 50,
  },

  topInfo: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: "center",
  },

  user: {
    fontSize: 25,
  },
  userRow: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {
    justifyContent: "flex-start",
    fontWeight: "300",
    right: 37,
  },
  iconsContainer: {
    width: "100%",
    height: "70%",
    top: 50,
    // backgroundColor: "lightgrey",
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
  },
  flatlist:{
    width:50,
    height:'90%',
    flexDirection:'column',
    flexWrap:'wrap'
  }
});
