import { View, Text, Image, Pressable } from "react-native";
const logoImage = require("../assets/adaptive-icon.png");

export default function ImageExample() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Pressable>
    </View>
  );
}
