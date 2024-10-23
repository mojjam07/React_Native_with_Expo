import { View, Text, Image, ImageBackground } from "react-native";
const logoImage = require("../assets/adaptive-icon.png");

export default function ImageExample() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text>Image text</Text>
      </ImageBackground>
    </View>
  );
}
